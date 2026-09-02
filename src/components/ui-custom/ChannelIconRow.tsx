import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type ChannelId = "whatsapp" | "instagram" | "web" | "facebook";

const channels: {
  id: ChannelId;
  label: string;
  gradient: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    gradient: "from-emerald-500 to-green-600",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    gradient: "from-pink-500 to-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "web",
    label: "Web",
    gradient: "from-sky-500 to-blue-600",
    icon: <Globe className="h-3.5 w-3.5" strokeWidth={2} />,
  },
  {
    id: "facebook",
    label: "Facebook",
    gradient: "from-blue-600 to-blue-700",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

interface ChannelIconRowProps {
  className?: string;
  size?: "sm" | "md";
}

export function ChannelIconRow({ className, size = "sm" }: ChannelIconRowProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-2", className)}
      role="list"
      aria-label="Publish channels"
    >
      {channels.map(({ id, label, gradient, icon }) => (
        <span
          key={id}
          role="listitem"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] font-medium text-white/85",
            size === "sm" ? "px-2 py-1 text-[10px]" : "px-2.5 py-1.5 text-xs",
          )}
        >
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-gradient-to-br text-white",
              size === "sm" ? "h-5 w-5" : "h-6 w-6",
              gradient,
            )}
          >
            {icon}
          </span>
          {label}
        </span>
      ))}
    </div>
  );
}

export function ChannelPlatformBadge({
  channelId,
  gradient,
  fallbackLabel,
  className,
}: {
  channelId?: ChannelId | string;
  gradient: string;
  fallbackLabel: string;
  className?: string;
}) {
  const channel = channels.find((item) => item.id === channelId);

  return (
    <span
      className={cn(
        "inline-flex h-6 min-w-[1.75rem] shrink-0 items-center justify-center rounded-md bg-gradient-to-br px-1.5 text-[9px] font-extrabold text-white",
        gradient,
        className,
      )}
    >
      {channel ? channel.icon : fallbackLabel}
    </span>
  );
}

export function channelIconForPlatform(id: string): string {
  const map: Record<string, string> = {
    whatsapp: "WA",
    instagram: "IG",
    story: "▶",
    facebook: "FB",
    website: "Web",
    "360": "360",
    marketplace: "MP",
  };
  return map[id] ?? id.slice(0, 3).toUpperCase();
}
