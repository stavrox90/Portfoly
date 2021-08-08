import React, { useEffect, useState } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import menuItems from "./menu-items";
import avatar from "../components/images/avatar.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      marginBottom: theme.spacing(8)
    },
    appBar: {},
    btmAppBar: {
      top: "auto",
      bottom: 0,
    },
    title: {},
    offset: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    active: {
      backgroundColor: theme.palette.secondary.light,
    },
  };
});

function RenderTopBar() {
  const classes = useStyles();
  return (
    <>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <div className={classes.offset} />
          <Typography>Filus</Typography>
          <Avatar src={avatar} className={classes.avatar} />
        </Toolbar>
      </AppBar>
    </>
  );
}

function RenderBottomBar() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("home");
  
  return (
    <>
      <AppBar elevation={0} position="fixed" className={classes.btmAppBar}>
        <BottomNavigation
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          showLabels
        >
          {menuItems.map((menu, id) => (
            <BottomNavigationAction
              key={id}
              label={menu.label}
              value={menu.value}
              icon={menu.icon}
              onClick={() => history.push(menu.path)}
            />
          )
          )}
        </BottomNavigation>
      </AppBar>
    </>
  );
}

export default function MobileView({ children }) {
  const classes = useStyles();
  return (
    <>
      <RenderTopBar />
        <div className={classes.page}>
          {children}
        </div>
      <RenderBottomBar />
    </>
  );
}
