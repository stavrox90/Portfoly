import React from "react";
import {
  makeStyles,
  Card,
  List,
  ListSubheader,
  Divider,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { works } from "../contents/details";

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

export default function NoteCard() {
  const classes = useStyles();

  return (
    <>
      <List
        className={classes.list}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nexted-list-subheader">
            Projects
          </ListSubheader>
        }
      >
        <Divider variant="middle" component="li" />

        {works.map((work, id) => (
          <>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardHeader
                  avatar={
                    <CardMedia
                      component="img"
                      alt={work.title}
                      image={work.img}
                      title={work.title}
                      className={classes.cover}
                    />
                  }
                  title={work.title}
                  subheader={work.description}
                />
              </div>
            </Card>
          </>
        ))}
      </List>
    </>
  );
}
