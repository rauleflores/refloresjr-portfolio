import React from "react";
import useStyles from "../Styles/useStyles";
import codePic from "../assets/florian-olivo-coding-stock.jpg";

const FrontPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.FrontPage}>
      <img src={codePic} alt="of code" className="fp-image" />
      <div className="fp-text-container">
        <h2 className="fp-h2">
          Hi! I'm Raul Flores and I build websites, API's, and databases.
        </h2>
        <div className="fp-spacer"></div>
      </div>
    </div>
  );
};

export default FrontPage;
