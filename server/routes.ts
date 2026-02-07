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

      // Basic HTML escaping function to prevent XSS
      const escapeHtml = (text: string) => {
        const map: Record<string, string> = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;',
        };
        return text.replace(/[&<>"']/g, (m) => map[m]);
      };

      const { data, error } = await resend.emails.send({
        from: "UrbanUplink Contact <onboarding@resend.dev>",
        to: ["vanshjhamb9@gmail.com"], // You can change this to your email
        subject: subject ? `New Contact: ${escapeHtml(subject)}` : 'New Contact Form Submission',
        replyTo: email,
        html: `
          <h3>New Message from Contact Form</h3>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message)}</p>
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
