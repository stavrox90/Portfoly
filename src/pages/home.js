import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import NoteCard from "../components/cards/NoteCard";
import ContactCard from "../components/cards/ContactCard";
import ProfileCard from "../components/cards/ProfileCard";
import AboutMeCard from "../components/cards/AboutMeCard"
import SkillCard from "../components/cards/SkillCard";

export default function HomePage({ children }) {
  return (
    <>
    {/* <Container> */}
      <ProfileCard />
      <SkillCard />
      <NoteCard />
      <AboutMeCard />
      <ContactCard />
      {children}
      {/* </Container> */}
    </>
  );
}