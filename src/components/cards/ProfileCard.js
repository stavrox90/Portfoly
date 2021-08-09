import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  ListSubheader,
  Divider,
  Hidden,
  List,
} from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 360,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 600,
    },
    margin: "auto",
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 360,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 600,
    },
    margin: "auto",
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));

// TODO: might implements ListItem as terminology
export default function ProfileCard() {
  const classes = useStyles();
  return (
    <>
      {/* <Hidden smUp> */}
      <List
        className={classes.root}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className={classes.subHeader}>
            Profile
          </ListSubheader>
        }
      >
        <Divider variant="middle" component="li" />

        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                src={profile.avatar}
                aria-label={profile.name}
                className={classes.avatar}
              />
            }
            title={
              <Typography variant="span" color="textSecondary" component="h5">
                {profile.name}
              </Typography>
            }
            subheader={profile.designation}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {profile.text}
            </Typography>
          </CardContent>
        </Card>
      </List>
      {/* </Hidden> */}
    </>
  );
}
