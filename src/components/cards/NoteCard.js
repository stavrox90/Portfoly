import React, { useState, useEffect } from "react";
import {
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

// card container
export default function NoteCard() {
  const [notes, setNotes] = useState(noteObj || []);

  const handleDelete = (id) => {
    if (notes.length > 0) {
      setNotes(notes.filter((card, index) => index !== id));
    }
  };

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {notes.map((note, id) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card elevation={1}>
                <CardHeader
                  action={
                    <IconButton onClick={() => handleDelete(id)}>
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