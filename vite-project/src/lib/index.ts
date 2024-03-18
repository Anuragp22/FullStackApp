import { z } from "zod";

export const SignValidation = z.object({
  name: z.string().min(2, { message: "Too Short Name" }).max(50),
  username: z.string().min(2, { message: "Too Short Username" }).max(50),
  email: z.string().email(),
  password: z.string().min(8, { message: "Too Short Password" }).max(100),
});
