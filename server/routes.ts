import type { Express, Request, Response } from "express";
import { z } from "zod";
import { storage } from "./storage";
import { insertExampleSchema } from "@shared/schema";
import { Resend } from "resend";

export function registerRoutes(app: Express) {
  // Contact Form API route
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const resend = process.env.RESEND_API_KEY
        ? new Resend(process.env.RESEND_API_KEY)
        : null;

      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      if (!resend) {
        console.error("Resend API key is missing");
        return res.status(500).json({ message: "Email service not configured" });
      }

      const { data, error } = await resend.emails.send({
        from: "UrbanUplink Contact <onboarding@resend.dev>",
        to: ["vanshjhamb9@gmail.com"], // You can change this to your email
        subject: `New Contact: ${subject}`,
        replyTo: email,
        html: `
          <h3>New Message from Contact Form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ message: "Failed to send email" });
      }

      res.json({ success: true, data });
    } catch (error: any) {
      console.error("Server error:", error);
      res.status(500).json({ message: error.message });
    }
  });

  // Example API route - add your own as needed
  app.get("/api/examples", async (_req: Request, res: Response) => {
    try {
      const examples = await storage.getExamples();
      res.json(examples);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/examples", async (req: Request, res: Response) => {
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
