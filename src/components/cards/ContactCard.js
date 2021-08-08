import React, { useState, useEffect } from "react";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@material-ui/core";
import {
  Cloud,
  EmailRounded,
  GitHub,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const contactList = [
  {
    title: "Email",
    value: "inrafilus@gmail.com",
    url: "mailto:inrafilus@gmail.com",
    color: "#D44638",
    img: "gmail",
    icon: <EmailRounded />,
  },
  {
    title: "LinkedIn",
    value: "Filus Inra",
    url: "https://www.linkedin.com/in/inrafilus/",
    color: "#0077B5",
    img: "linkedin",
    icon: <LinkedIn />,
  },
  {
    title: "Github",
    value: "stavrox90",
    url: "https://github.com/stavrox90",
    color: "#999999",
    img: "github",
    icon: <GitHub />,
  },
  //   {
  //     title: "Twitter",
  //     value: "@nyxstvrx",
  //     url: "https://twitter.com/nyxstvrx",
  //     color: "#1DA1F2",
  //     img: "twitter",
  //     icon: <Twitter />,
  //   },
  //   {
  //     title: "Soundcloud",
  //     value: "Z'yev",
  //     url: "https://soundcloud.com/stvrx90",
  //     color: "#e87109",
  //     img: "soundcloud",
  //     icon: <Cloud />,
  //   },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      maxWidth: 360,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 600,
    },
    margin: "auto",
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
}));

export default function ContactCard() {
  const classes = useStyles();

  return (
    <>
      <List
        className={classes.root}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nexted-list-subheader">
            Contact
          </ListSubheader>
        }
      >
        <Divider variant="middle" component="li" />
        {contactList.map((contact) => (
          <>
            <ListItem button>
              <ListItemIcon>
                <Avatar>{contact.icon || "S"}</Avatar>
              </ListItemIcon>
              <ListItemText primary={contact.title} secondary={contact.value} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}
