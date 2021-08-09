import React from "react";
import { makeStyles, Container, Grid, Hidden } from "@material-ui/core";
import NoteCard from "../components/cards/NoteCard";
import ContactCard from "../components/cards/ContactCard";
import ProfileCard from "../components/cards/ProfileCard";
import AboutMeCard from "../components/cards/AboutMeCard";
import SkillCard from "../components/cards/SkillCard";
import ProjectCard from "../components/cards/ProjectCard";

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
      <Hidden smUp>
        <ProfileCard />
        <SkillCard />
      </Hidden>
      <Container>
        <Hidden xsDown>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <ProfileCard />
              <SkillCard />
              <AboutMeCard />
              <ProjectCard />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ContactCard />
              <NoteCard />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              {/* <ProjectCard /> */}
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              {/* <NoteCard /> */}
            </Grid>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Hidden>
      </Container>
    </>
  );
}
