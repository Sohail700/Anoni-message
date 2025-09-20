import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "username must be atleast 4 characters")
  .max(15, "username must be no more 15 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "password must be atleast 8 characters" }),
});
