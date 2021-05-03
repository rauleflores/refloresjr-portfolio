import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useStyles from "../Styles/useStyles";

const NavBar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    history.push("/home/login");
  };

  return (
    <div className={classes.Navigation}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            Raul E. Flores Jr
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ veritcal: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ veritcal: "top", horizontal: "right" }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
