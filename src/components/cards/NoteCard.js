import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const noteObj = [
  {
    title: "Yoshi's birthday bash",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "reminders",
    id: 1,
  },
  {
    title: "Complete my ninja training",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    category: "work",
    id: 2,
  },
  {
    title: "Order a pizza!",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "todos",
    id: 3,
  },
];

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
    backgroundColor: theme.palette.background.paper,
  },
  gridContainer: {
    width: "100%",
    margin: 0,
  },
  card: {
    marginTop: theme.spacing(1)
  },
  button: {
    "&:hover": {
      // backgroundColor: "#fff",
      color: theme.palette.warning.dark,
    },
  },
}));

export default function NoteCard() {
  const [notes, setNotes] = useState(noteObj || []);
  const classes = useStyles();

  const handleDelete = (id) => {
    if (notes.length > 0) {
      setNotes(notes.filter((card, index) => index !== id));
    }
  };

  // TODO: undo delete feature
  const undoDelete = () => {
    // if (notes.length > 0) {
    //   setNotes(notes.filter((card, index) => index !== id));
    // }
  };

  return (
    <>
      {/* <Container> */}
      {/* <Container className={classes.root}> */}
        <Grid className={classes.root}>
          <Card className={classes.card}>
          {notes.map((note, id) => (
            <>
              <CardHeader
                key={id}
                action={
                  <IconButton
                    // onClick={() => handleDelete(id)}
                    className={classes.button}
                  >
                    <DeleteOutlined />
                  </IconButton>
                }
                title={note.title}
                subheader={note.category}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {note.details}
                </Typography>
              </CardContent>
            </>
          ))}
          </Card>
        </Grid>
      {/* </Container> */}
    </>
  );
}
