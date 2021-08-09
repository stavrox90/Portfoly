import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import ProjectCard from "../components/cards/ProjectCard";

export default function ProjectPage({ children }) {
  return (
    <>
      <ProjectCard />
      {children}
    </>
  );
}