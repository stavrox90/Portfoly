import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import ContactCard from "../components/cards/ContactCard";

export default function ContactPage({ children }) {
  return (
    <>
      <ContactCard />
      {children}
    </>
  );
}