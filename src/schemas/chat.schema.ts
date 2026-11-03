import { z } from "zod";

export const chatRequestSchema = z.object({
    message: z.string()
    .trim()
    .min(1, "message cannot be empty")
    .max(10000, "hey user maximum 1000 characters")

}).strict()