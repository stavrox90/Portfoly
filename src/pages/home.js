import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import NoteCard from "../components/cards/NoteCard";

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

const SomeFunction = (notes) => {
    const [data, setData] = useState(notes || [])
    const props = { data, setData }
    // console.log(notes)

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {data.map((note, id) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <NoteCard note={note} index={id} {...props} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default function HomePage({ children }) {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch("_iRvYX7_db.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => (setData(data), setLoading(false)))
//       .catch((err) => {
//         throw (err, setError(true));
//       });
//   }, []);

//   if (loading) {
//     return <h1>loading...</h1>;
//   }

  return (
    <>
      {SomeFunction(noteObj)}
      {children}
    </>
  );
}