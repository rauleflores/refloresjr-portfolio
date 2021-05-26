import * as yup from "yup";

let loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email.")
    .required("Email is required.")
    .min(14, "Email is too short - 4 chars minimum.")
    .max(50, "Email is too long."),
  password: yup
    .string("Please enter a password.")
    .required("Password is required.")
    .min(6, "Password is too short! 6 char minimum.")
    .max(24, "Password is too long. 24 char maximum."),
});

export default loginValidationSchema;
