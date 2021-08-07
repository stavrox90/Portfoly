import React, { useState, useEffect } from "react";
import { Grid, Card, CardHeader, CardContent, Typography, IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

export default function NoteCard(props) {
  const { note, index, data, setData } = props
  
  const handleDelete = (id) => {
    if (data.length > 0) {
      setData(data.filter((card, index) => index !== id))
    }
  }

  return (
    <>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(index)}>
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
