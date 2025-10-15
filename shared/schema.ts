import { z } from "zod";

// Example schema - this is a placeholder since the Lovable project is frontend-only
// You can add your own schemas here as needed

export const insertExampleSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type InsertExample = z.infer<typeof insertExampleSchema>;

export interface Example extends InsertExample {
  id: number;
  createdAt: Date;
}
