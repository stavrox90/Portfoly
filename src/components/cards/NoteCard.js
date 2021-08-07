import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Grid,
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
    maxWidth: "80vw",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    "&:hover": {
      // backgroundColor: "#fff",
      color: theme.palette.warning.dark
    }
  }
  // nested: {
  //   paddingLeft: theme.spacing(4),
  // },
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
  }

  return (
    <>
    {/* <Container> */}
      <Container className={classes.root}>
        <Grid container spacing={3}>
          {notes.map((note, id) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card elevation={3}>
                <CardHeader
                  action={
                    <IconButton 
                      onClick={() => handleDelete(id)}
                      className={classes.button}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  }
                  title={note.title}
                  subheader={note.category}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {note.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
