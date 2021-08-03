import React from "react";
import useStyles from "../Styles/useStyles";

const Splash = () => {
  const classes = useStyles();

  return (
    <div className={classes.Splash}>
      <h2 className="greeting">Welcome Visitor!</h2>
      <div>
        <div className="shortMessageDiv">
          <p className="shortMessage">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="guestDiv">
          <h3 className="h3Spash guestInfo">Guest Info</h3>
          <p className="emailSplash">
            E-mail: <span className="guestEmail">guest@test.com</span>
          </p>
          <p className="passwordSplash">
            Password: <span className="guestPassword">01Test01</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
