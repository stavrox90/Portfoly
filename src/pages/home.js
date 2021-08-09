import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import NoteCard from "../components/cards/NoteCard";
import ContactCard from "../components/cards/ContactCard";
import ProfileCard from "../components/cards/ProfileCard";
import AboutMeCard from "../components/cards/AboutMeCard";
import SkillCard from "../components/cards/SkillCard";

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
}));

export default function HomePage({ children }) {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <ProfileCard />
            <SkillCard />
            <ContactCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <AboutMeCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <NoteCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <NoteCard />
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
