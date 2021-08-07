import React from "react";
import {
  makeStyles,
  Avatar,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@material-ui/core";

import avatar from "../images/avatar.jpg";

const author = {
  name: "Filus Inra",
  avatar,
};

const aboutObj = [
  {
    author,
    header: "Hello world! ✨",
    text: `I'm an alumni from UiTM (Seri Iskandar, Perak) since 2013, and my
    field of study was Quantity Surveying (Diploma).`,
  },
  {
    author,
    header: "My previous field",
    text: `I was a Quantity Surveyor for several years at local Consultant Firm, Contractors and Landscape Architect where I learned greal
    in documentations and costings.`,
  },
  {
    author,
    header: "I love musics! 🎸🎶",
    text: `I listens to various genre of musics to get myself hyped.`,
  },
  {
    author,
    header: "How I got into programming?",
    text: `My coding journey started around 2017, when I tried coding using HTML,
    PHP, MySQL, Javascript with the help of my programmer friends and
    started using ReactJS in mid 2019.`,
  },
  {
    author,
    header: "Coffee~ ☕🤤",
    text: `Ah, yes - My favourite beverage! Always start my day with this magical beverage
    whenever available.
    `,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  //   nested: {
  //     paddingLeft: theme.spacing(4),
  //   },
}));

export default function AboutMeCard() {
  const classes = useStyles();
  return (
    <>
      <List
        className={classes.root}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nexted-list-subheader">
            About Me
          </ListSubheader>
        }
      >
        <Divider variant="middle" component="li" />

        {aboutObj.map((about) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={about.author.avatar} alt={about.author.name} />
              </ListItemAvatar>

              <ListItemText
                primary={about.header}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textSecondary"
                  >
                    {about.text}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
}

// const test = () => {(
//     <ListItemIcon>
//     <Avatar>{about.avatar || "S"}</Avatar>
//   </ListItemIcon>

//   <ListItemText primary={about.author.name} secondary={about.text} />
// )}
