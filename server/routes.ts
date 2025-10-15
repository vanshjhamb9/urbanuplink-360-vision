import type { Express } from "express";
import { z } from "zod";
import { storage } from "./storage";
import { insertExampleSchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  // Example API route - add your own as needed
  app.get("/api/examples", async (_req, res) => {
    try {
      const examples = await storage.getExamples();
      res.json(examples);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/examples", async (req, res) => {
    try {
      const data = insertExampleSchema.parse(req.body);
      const example = await storage.createExample(data);
      res.json(example);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  });
}
