import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import NoteCard from "../components/cards/NoteCard";
import ContactCard from "../components/cards/ContactCard";

export default function HomePage({ children }) {
  return (
    <>
    {/* <Container> */}
      <ContactCard />
      {children}
      {/* </Container> */}
    </>
  );
}