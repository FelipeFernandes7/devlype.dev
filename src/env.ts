import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export const env = createEnv({
  extends: [vercel],
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NODEMAILER_USER: z.string().min(1),
    NODEMAILER_PASSWORD: z.string().min(1),
    KV_REST_API_READ_ONLY_TOKEN: z.string().min(1),
    KV_REST_API_TOKEN: z.string().min(1),
    KV_REST_API_URL: z.string().url().min(1),
    KV_URL: z.string().url().min(1),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV as string,
    NODEMAILER_USER: process.env.NODEMAILER_USER as string,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD as string,
    KV_REST_API_READ_ONLY_TOKEN: process.env
      .KV_REST_API_READ_ONLY_TOKEN as string,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN as string,
    KV_REST_API_URL: process.env.KV_REST_API_URL as string,
    KV_URL: process.env.KV_URL as string,
  },
  skipValidation: !!process.env.CI,
});
