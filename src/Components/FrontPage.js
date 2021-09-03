import React from "react";
import useStyles from "../Styles/useStyles";
import codePic from "../assets/florian-olivo-coding-stock.jpg";

const FrontPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.FrontPage} id="FrontPage">
      <img src={codePic} alt="of code" className="fp-image" />
      <div className="fp-text-container">
        <span className="fp-span-1 typewriter-anim">
          Hi! I'm Raul Flores and I build websites,
        </span>
        <span className="fp-span-2 typewriter-anim">
          {" "}
          API's, and databases.
        </span>
        <div className="fp-spacer"></div>
      </div>
    </div>
  );
};

export default FrontPage;
