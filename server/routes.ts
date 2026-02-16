import type { Express, Request, Response } from "express";
import { z } from "zod";
import { storage } from "./storage";
import { insertExampleSchema } from "@shared/schema";
import { Resend } from "resend";

export function registerRoutes(app: Express) {
  // Contact Form API route
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      console.log("Contact form submission received");
      console.log("Request body:", req.body);
      console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        console.error("Resend API key is missing from environment variables");
        return res.status(500).json({ message: "Email service not configured. Please set RESEND_API_KEY in .env file." });
      }

      const resend = new Resend(resendApiKey);
      const { name, email, subject, message } = req.body || {};

      console.log("Form data:", { name, email, subject, message });

      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Missing required fields",
          received: { name: !!name, email: !!email, message: !!message }
        });
      }

      // Basic HTML escaping function to prevent XSS
      const escapeHtml = (text: string) => {
        if (!text) return '';
        const map: Record<string, string> = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;',
        };
        return String(text).replace(/[&<>"']/g, (m) => map[m]);
      };

      const emailSubject = subject ? `New Contact: ${escapeHtml(subject)}` : 'New Contact Form Submission';
      const emailHtml = `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `;

      console.log("Sending email via Resend...");
      
      // Configure email addresses
      // For production: Verify your domain at resend.com/domains and set RESEND_FROM_EMAIL
      // Example: RESEND_FROM_EMAIL=UrbanUplink Contact <contact@urbanuplink.in>
      const fromEmail = process.env.RESEND_FROM_EMAIL || "UrbanUplink Contact <onboarding@resend.dev>";
      
      // Recipient email - can be configured or defaults to admin email
      // Set RESEND_TO_EMAIL in .env to send to a specific address, or it will use admin@urbanuplink.ai
      const recipientEmail = process.env.RESEND_TO_EMAIL || "admin@urbanuplink.ai";
      
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [recipientEmail],
        subject: emailSubject,
        replyTo: email, // This allows you to reply directly to the form submitter
        html: emailHtml,
      });

      if (error) {
        console.error("Resend API error:", JSON.stringify(error, null, 2));
        
        // Provide more helpful error messages
        let errorMessage = "Failed to send email";
        if (error.message?.includes("invalid") || error.statusCode === 400) {
          errorMessage = "Invalid Resend API key. Please check your .env file and ensure RESEND_API_KEY is set correctly.";
        } else if (error.message) {
          errorMessage = `Resend API error: ${error.message}`;
        }
        
        return res.status(500).json({ 
          message: errorMessage,
          error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
      }

      console.log("Email sent successfully:", data);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error("Server error in contact route:", error);
      console.error("Error stack:", error.stack);
      res.status(500).json({ 
        message: error.message || "Internal server error",
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
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
