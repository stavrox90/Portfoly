import React, { useState, useEffect } from "react";
import { Grid, Card, CardHeader, CardContent, Typography, IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

export default function NoteCard({ note }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('_iRvYX7_db.json', {
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  })
  }, [])

  const handleDelete = async (id) => {
    await fetch()
  }

  return (
    <>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => console.log('delete')}>
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
    </>
  );
};
