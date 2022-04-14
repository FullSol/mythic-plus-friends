import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Logo from "../../logo";
import { AcademyCard } from "../../cards";
import { siteInfo, academyCard as academyCardData } from "../../../data";

function AcademySection() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  useEffect(() => {
    const { academy } = siteInfo;

    setHeading(academy.heading);
    setSubHeading(academy.subHeading);
    setCardTitle(academyCardData.title);
    setCardDescription(academyCardData.description);
  });

  return (
    <Grid>
      <Grid>
        <Typography variant="h2" component="h2">
          {heading}
        </Typography>
        <Typography variant="h3" component="h3">
          {subHeading}
        </Typography>
        <Grid>
          <Logo />
          <AcademyCard title={cardTitle} description={cardDescription} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AcademySection;
