import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar
} from "@material-ui/core";
import {Link} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

const Navbar = ({ open, setOpen }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, "bg-dark text-light", {
        [classes.appBarShift]: open
      })}
      color="default"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          display="inline"
          style={{ flexGrow: 1 }}
        >
          Student Dashboard
        </Typography>
        <Avatar component={Link} to="/profile">
          <MenuIcon />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
