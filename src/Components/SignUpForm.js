import React from "react";
import { useFormik } from "formik";
import { Button, TextField, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "../Styles/useStyles";
import signupValidationSchema from "../Schemas/SignupFormSchema";

const SignUp = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_check: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  const buttonDisabled = ({
    firstName,
    lastName,
    email,
    password,
    password_check,
  }) => {
    const valueCheck =
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      password_check.length > 0;
    console.log(valueCheck);
    return valueCheck;
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.signup_text}>
          <h3 className={classes.signup_h3}>Sign Up</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <TextField
          className={classes.textField}
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          className={classes.textField}
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          className={classes.textField}
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className={classes.textField}
          fullWidth
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          className={classes.textField}
          fullWidth
          id="password_check"
          name="password_check"
          label="Confirm Password"
          variant="outlined"
          value={formik.values.password_check}
          onChange={formik.handleChange}
          error={
            formik.touched.password_check &&
            Boolean(formik.errors.password_check)
          }
          helperText={
            formik.touched.password_check && formik.errors.password_check
          }
        />
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={buttonDisabled(formik.values) ? false : true}
        >
          Submit
        </Button>
      </form>
      <div className={classes.login_cta}>
        <span>
          Already a member?
          <br />
          <Link to="login-page">Login</Link>
        </span>
      </div>
    </Card>
  );
};

export default SignUp;
