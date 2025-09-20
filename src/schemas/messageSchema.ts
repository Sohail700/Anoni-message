import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be atleast 10 character" })
    .min(300, { message: "Content must not be more than 300 character" }),
});
