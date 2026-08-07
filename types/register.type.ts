import { registerSchema } from "@/schemas/register.schema";
import * as yup from "yup";

export type TRegister = yup.InferType<typeof registerSchema>;