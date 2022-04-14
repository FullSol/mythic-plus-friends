import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Logo from "../../logo";
import { AcademyCard } from "../../cards";

function AcademySection() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  return (
    <Grid>
      <Grid>
        <h1>Academy</h1>
        <Grid>
          <Logo />
          <AcademyCard />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AcademySection;
