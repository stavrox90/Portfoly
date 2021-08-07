import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import avatar from "../images/avatar.jpg";

const profile = {
  avatar,
  name: "Filus Inra",
  firstName: "Filus",
  lastName: "Inra",
  designation: "Quantity Surveyor / Programmer",
  text: `A former Surveyor with 5+ years of working experience in respective field aspiring to further
    develop and learn new skills while integrating both logical and creative reasoning in performing
    tasks given.`,
};

const useStyle = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      //   backgroundColor: red[500],
    },
  };
});

// TODO: might implements ListItem as terminology
export default function ProfileCard() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={profile.avatar}
            aria-label={profile.name}
            className={classes.avatar}
          />
        }
        title={profile.name}
        subheader={profile.designation}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {profile.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
