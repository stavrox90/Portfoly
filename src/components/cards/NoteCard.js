import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Card,
  ListSubheader,
  Divider,
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
  subHeader: {
    width: "100%",
  },
  gridContainer: {
    width: "100%",
    margin: 0,
  },
  card: {
    marginTop: theme.spacing(1),
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
  // const undoDelete = () => {
  //   if (notes.length > 0) {
  //     setNotes(notes.filter((card, index) => index !== id));
  //   }
  // };

  return (
    <>
      <Grid container className={classes.root}>
        <ListSubheader component="div" className={classes.subHeader}>
          {notes.length !== 0? 'Notes': 'No more notes :('}
        </ListSubheader>
          {/* <Divider variant="middle" component="h5" /> */}
        <Grid item>
          <Card className={classes.card} elevation={0}>
            {notes.map((note, id) => (
              <>
                <Divider variant="middle" component="h5" />
                <CardHeader
                  key={id}
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
                  <Typography
                    variant="body2"
                    gutterBottom
                    color="textSecondary"
                    component="p"
                  >
                    {note.details}
                  </Typography>
                </CardContent>
              </>
            ))}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
