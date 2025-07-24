import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log the submission and return success
      console.log("New contact submission:", submission);
      
      // TODO: Implement email sending to thegentlesole22@gmail.com
      // This would typically use a service like Nodemailer, SendGrid, or similar
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon.",
        submissionId: submission.id 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
