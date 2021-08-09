import React from "react";
import ProjectCard from "../components/cards/ProjectCard";

export default function ProjectPage({ children }) {
  return (
    <>
      <ProjectCard />
      {children}
    </>
  );
}