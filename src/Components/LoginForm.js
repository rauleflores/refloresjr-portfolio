import React from "react";
import { useFormik } from "formik";
import {
  Card,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "../Styles/useStyles";
import loginValidationSchema from "../Schemas/LoginFormSchema";

const LoginForm = () => {
  const history = useHistory();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      showPassword: false,
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      history.push("/dashboard");
      // formik.resetForm();
    },
  });

  const passwordInputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() =>
            formik.setFieldValue(
              "showPassword",
              !formik.values.showPassword,
              false
            )
          }
          onMouseDown={(e) => e.preventDefault()}
          edge="end"
        >
          {formik.values.showPassword ? (
            <Visibility color="primary" />
          ) : (
            <VisibilityOff color="disabled" />
          )}
        </IconButton>
      </InputAdornment>
    ),
  };

  const buttonDisabled = ({ email, password }) => {
    const check = email.length > 0 && password.length > 0;
    console.log(check);
    return check;
  };

  return (
    <Card className={classes.FormCard}>
      <form onSubmit={formik.handleSubmit}>
        <div className="text">
          <h3 className="h3">Login</h3>
        </div>
        <TextField
          className="textField"
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
          className="textField"
          fullWidth
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type={formik.values.showPassword ? "text" : "password"}
          InputProps={passwordInputProps}
        />

        <Button
          className="button"
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={buttonDisabled(formik.values) ? false : true}
        >
          Submit
        </Button>
      </form>
      <div className="cta">
        <span>
          Need an account?
          <br />
          <Link to="signup">Sign up</Link>
        </span>
      </div>
    </Card>
  );
};

export default LoginForm;
