import React from "react";
import clsx from "clsx";
import { Drawer, Divider } from "@material-ui/core";
import SideBar from "./Sidebar";
import Main from "./Main";
import Navbar from "./Navbar";
import useStyles from "./styles";
export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return ( 
    <>
      <div className={`${classes.root}`}>
        <Navbar open={open} setOpen={setOpen} className="bg-dark" />
        <Drawer
          variant="permanent"
          className={clsx( classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx('bg-dark',{
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <Divider />
          <SideBar close={() => setOpen(!open)} open={open} />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Main />
        </main>
      </div>
    </>
  );
}
