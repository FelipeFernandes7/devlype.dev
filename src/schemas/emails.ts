import { z } from "zod";

export interface EmailSchema {
  name: string;
  email: string;
  message: string;
}

export const emailSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z
    .string()
    .min(1, {
      message: "Please enter your email!",
    })
    .email("Please provide a valid email!"),
  message: z.string().min(1, {
    message: "Why send an empty message?",
  }),
});
