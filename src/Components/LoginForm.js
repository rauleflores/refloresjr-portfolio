import React from "react";
import { useFormik } from "formik";
import { Button, Card, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "../Styles/useStyles";
import loginValidationSchema from "../Schemas/LoginFormSchemea";

const LoginForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  const buttonDisabled = ({ email, password }) => {
    const check = email.length > 0 && password.length > 0;
    console.log(check);
    return check;
  };

  return (
    <Card className={classes.Card.card}>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.Card.text}>
          <h3 className={classes.Card.h3}>Login</h3>
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
          className={classes.Card.textField}
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
          className={classes.Card.textField}
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

        <Button
          className={classes.Card.Button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={buttonDisabled(formik.values) ? false : true}
        >
          Submit
        </Button>
      </form>
      <div className={classes.Card.cta}>
        <span>
          Need an account?
          <br />
          <Link to="signup-page">Sign up</Link>
        </span>
      </div>
    </Card>
  );
};

export default LoginForm;
