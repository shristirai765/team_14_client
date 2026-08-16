import { userSchema } from "@/schemas/user.schema";
import * as yup from "yup";
import { Image } from "./global.types";

export type TUser = {
    _id: string;
    full_name: string;
    email: string,
    createdAt: string;
    role: string;
    updatedAt: string;
    profile_image ?: Image;
}

// export type TUser = yup.InferType<typeof userSchema>;