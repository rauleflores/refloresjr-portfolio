import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

let validationSchema = yup.object().shape({
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

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <p>Login</p>

        <TextField
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        <span>
          Need an account?
          <br />
          <Link to="signup-page">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
