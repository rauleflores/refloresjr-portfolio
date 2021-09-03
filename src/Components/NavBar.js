import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../Styles/useStyles";

const NavBar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.Navigation}>
      <AppBar position="static">
        <Toolbar className="nav-toolbar">
          <IconButton
            edge="start"
            className="nav-menuButton"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon className="nav-menuIcon" />
          </IconButton>
          <Typography variant="h6" className="nav-title">
            Raul E. Flores Jr
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
