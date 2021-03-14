import * as yup from "yup";

let signupValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please add your first name.")
    .min(2, "Must be a real name."),
  lastName: yup
    .string()
    .required("Please add your last name.")
    .min(2, "Must be a real name."),
  email: yup
    .string()
    .email("Enter a valid email.")
    .required("Email is required.")
    .min(14, "Email is too short - 4 chars minimum.")
    .max(50, "Email is too long."),
  password: yup
    .string("Please enter a password.")
    .required("Password is needed.")
    .min(6, "Password is too short! 6 char minimum.")
    .max(24, "Password is too long. 24 char maximum."),
  password_check: yup
    .string()
    .required("Password is needed.")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export default signupValidationSchema;
