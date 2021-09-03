import React from "react";
import useStyles from "../Styles/useStyles";
const AboutMe = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.AboutMe} id="AboutMe">
      <div className="am-text-container-top">
        <span>Hello!</span>
      </div>
      <div className="am-text-container-bottom">
        <span>Hello!</span>
      </div>
    </div>
  );
};

export default AboutMe;
