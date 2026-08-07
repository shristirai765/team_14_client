import * as yup from "yup";

export const registerSchema = yup.object({
    full_name: yup.string().required("name is required"),
    phone: yup.string().required("phone is required"),
    email: yup.string().email().required("need email"),
    password: yup.string().required("password is required"),
    c_password: yup.string().required("confirmation password is required"),
});