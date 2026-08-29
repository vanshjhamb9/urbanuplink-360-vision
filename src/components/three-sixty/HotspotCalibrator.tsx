import { useCallback, useEffect, useState, type RefObject } from "react";
import { Copy, Download, Eraser, SkipBack, SkipForward, Trash2 } from "lucide-react";
import {
  CALIBRATOR_STORAGE_KEY,
  cloneHotspotFeatures,
  exportHotspotJson,
  frameToAngle,
  hotspotFeatures,
  importHotspotJson,
  type HotspotFeature,
  type HotspotFeatureId,
  TOTAL_FRAMES,
} from "@/lib/threeSixtyHotspots";

const FEATURE_IDS: HotspotFeatureId[] = ["grille", "headlights", "wheels", "tailLamps"];

export function useCalibratorEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("calibrate360") === "1") {
      setEnabled(true);
      return;
    }
    if (import.meta.env.DEV && localStorage.getItem("calibrate360") === "1") {
      setEnabled(true);
    }
  }, []);

  return enabled;
}

function loadDraftFeatures(): HotspotFeature[] {
  try {
    const raw = localStorage.getItem(CALIBRATOR_STORAGE_KEY);
    if (raw) return importHotspotJson(raw);
  } catch {
    // ignore corrupt draft
  }
  return cloneHotspotFeatures();
}

type HotspotCalibratorProps = {
  currentFrame: number;
  onFrameChange: (frame: number) => void;
  stageRef: RefObject<HTMLDivElement>;
};

export function HotspotCalibrator({
  currentFrame,
  onFrameChange,
  stageRef,
}: HotspotCalibratorProps) {
  const [features, setFeatures] = useState<HotspotFeature[]>(() => loadDraftFeatures());
  const [activeFeatureId, setActiveFeatureId] = useState<HotspotFeatureId>("grille");
  const [copied, setCopied] = useState(false);

  const activeFeature = features.find((f) => f.id === activeFeatureId) ?? features[0];

  useEffect(() => {
    localStorage.setItem(CALIBRATOR_STORAGE_KEY, exportHotspotJson(features));
  }, [features]);

  const updateFeatures = useCallback((updater: (prev: HotspotFeature[]) => HotspotFeature[]) => {
    setFeatures(updater);
  }, []);

  const placeAt = useCallback(
    (x: number, y: number) => {
      updateFeatures((prev) =>
        prev.map((feature) => {
          if (feature.id !== activeFeatureId) return feature;
          const frames = [...feature.frames];
          frames[currentFrame] = {
            x: Math.round(x * 10) / 10,
            y: Math.round(y * 10) / 10,
          };
          return { ...feature, frames };
        }),
      );
    },
    [activeFeatureId, currentFrame, updateFeatures],
  );

  const handleStageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    placeAt(x, y);
  };

  const clearFrame = useCallback(() => {
    updateFeatures((prev) =>
      prev.map((feature) => {
        const frames = [...feature.frames];
        frames[currentFrame] = null;
        return { ...feature, frames };
      }),
    );
  }, [currentFrame, updateFeatures]);

  const clearFeature = useCallback(() => {
    updateFeatures((prev) =>
      prev.map((feature) =>
        feature.id === activeFeatureId
          ? { ...feature, frames: Array(TOTAL_FRAMES).fill(null) }
          : feature,
      ),
    );
  }, [activeFeatureId, updateFeatures]);

  const resetToSource = useCallback(() => {
    localStorage.removeItem(CALIBRATOR_STORAGE_KEY);
    setFeatures(cloneHotspotFeatures());
  }, []);

  const copyJson = async () => {
    await navigator.clipboard.writeText(exportHotspotJson(features));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const downloadJson = () => {
    const blob = new Blob([exportHotspotJson(features)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "threeSixtyHotspots.data.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const stepFrame = useCallback(
    (delta: number) => {
      onFrameChange((currentFrame + delta + TOTAL_FRAMES) % TOTAL_FRAMES);
    },
    [currentFrame, onFrameChange],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        stepFrame(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        stepFrame(1);
      } else if (event.key === "Delete" || event.key === "Backspace") {
        event.preventDefault();
        clearFrame();
      } else if (event.key >= "1" && event.key <= "4") {
        const index = Number(event.key) - 1;
        if (FEATURE_IDS[index]) setActiveFeatureId(FEATURE_IDS[index]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [clearFrame, stepFrame]);

  const previewHotspots = features
    .map((feature) => {
      const position = feature.frames[currentFrame];
      return position ? { ...feature, position } : null;
    })
    .filter((item): item is HotspotFeature & { position: { x: number; y: number } } => item !== null);

  return (
    <>
      <div
        className="absolute inset-0 z-40 cursor-crosshair"
        onClick={handleStageClick}
        aria-hidden
      />
      {previewHotspots.map((spot) => (
        <div
          key={spot.id}
          className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${spot.position.x}%`, top: `${spot.position.y}%` }}
        >
          <div
            className={`h-3 w-3 rounded-full border-2 ${
              spot.id === activeFeatureId ? "border-yellow-400 bg-yellow-400/80" : "border-white bg-white/60"
            }`}
          />
        </div>
      ))}

      <div className="pointer-events-auto absolute left-2 top-2 z-[60] max-w-[min(100%,340px)] rounded-xl border border-yellow-400/40 bg-brand-black/95 p-3 text-xs text-white shadow-2xl backdrop-blur-xl">
        <p className="mb-2 font-bold uppercase tracking-wider text-yellow-400">360° Calibrator</p>
        <p className="mb-1 text-white/60">Click on the vehicle to place the selected feature.</p>
        <p className="mb-3 text-[10px] text-white/40">←/→ frame · 1–4 feature · Del clear frame</p>

        <div className="mb-3 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => stepFrame(-1)}
            className="rounded-lg border border-white/20 p-1.5 hover:bg-white/10"
            aria-label="Previous frame"
          >
            <SkipBack className="h-4 w-4" />
          </button>
          <div className="text-center">
            <div className="font-mono font-bold">
              Frame {currentFrame} / {TOTAL_FRAMES - 1}
            </div>
            <div className="text-white/50">{Math.round(frameToAngle(currentFrame))}°</div>
          </div>
          <button
            type="button"
            onClick={() => stepFrame(1)}
            className="rounded-lg border border-white/20 p-1.5 hover:bg-white/10"
            aria-label="Next frame"
          >
            <SkipForward className="h-4 w-4" />
          </button>
        </div>

        <input
          type="range"
          min={0}
          max={TOTAL_FRAMES - 1}
          value={currentFrame}
          onChange={(e) => onFrameChange(Number(e.target.value))}
          className="mb-3 w-full accent-yellow-400"
        />

        <div className="mb-3 flex flex-wrap gap-1">
          {hotspotFeatures.map((feature, index) => (
            <button
              key={feature.id}
              type="button"
              onClick={() => setActiveFeatureId(feature.id)}
              className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase ${
                activeFeatureId === feature.id
                  ? "bg-yellow-400 text-brand-black"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {index + 1}. {feature.label}
            </button>
          ))}
        </div>

        <div className="mb-3 rounded-lg bg-white/5 p-2 font-mono text-[10px] text-white/70">
          {activeFeature.frames[currentFrame]
            ? `x: ${activeFeature.frames[currentFrame]!.x}, y: ${activeFeature.frames[currentFrame]!.y}`
            : "null (hidden)"}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={clearFrame}
            className="flex items-center gap-1 rounded-lg border border-white/20 px-2 py-1 hover:bg-white/10"
          >
            <Eraser className="h-3 w-3" /> Clear frame
          </button>
          <button
            type="button"
            onClick={clearFeature}
            className="flex items-center gap-1 rounded-lg border border-white/20 px-2 py-1 hover:bg-white/10"
          >
            <Trash2 className="h-3 w-3" /> Clear feature
          </button>
          <button
            type="button"
            onClick={copyJson}
            className="flex items-center gap-1 rounded-lg border border-yellow-400/40 bg-yellow-400/10 px-2 py-1 text-yellow-300 hover:bg-yellow-400/20"
          >
            <Copy className="h-3 w-3" /> {copied ? "Copied!" : "Copy JSON"}
          </button>
          <button
            type="button"
            onClick={downloadJson}
            className="flex items-center gap-1 rounded-lg border border-yellow-400/40 bg-yellow-400/10 px-2 py-1 text-yellow-300 hover:bg-yellow-400/20"
          >
            <Download className="h-3 w-3" /> Download JSON
          </button>
          <button
            type="button"
            onClick={resetToSource}
            className="flex items-center gap-1 rounded-lg border border-white/20 px-2 py-1 hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
