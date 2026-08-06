import * as yup from "yup";
import { loginSchema } from "@/schemas/auth.schema";

// export type TLogin ={
//     email: string;
//     password: string;
// };

export type TLogin = yup.InferType<typeof loginSchema>;