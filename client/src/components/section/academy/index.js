import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "../../logo";
import AcademyCardContainer from "../../../containers/AcademyCardContainer";
import { siteInfo } from "../../../data";

function AcademySection() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  useEffect(() => {
    const { academy } = siteInfo;

    setHeading(academy.heading);
    setSubHeading(academy.subHeading);
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
          <AcademyCardContainer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AcademySection;
