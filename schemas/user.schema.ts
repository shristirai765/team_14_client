import * as yup from "yup";

export const userSchema = yup.object({
    _id: yup.string().required("id is required"),
    full_name: yup.string().required("name is required"),
    email: yup.string().email().required("need email"),
    role: yup.string().required("confirmation password is required"),
});