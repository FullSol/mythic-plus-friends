import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { siteInfo } from "../../../data";
import AnnouncementCardContainer from "../../../containers/AnnouncementCardContainer";

const AnnouncementGrid = styled(Grid)`
  justify-content: center;
  gap: 64px;
`;

function AnnouncementSection() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  useEffect(() => {
    // api/sections/announcements
    const { announcements } = siteInfo;
    setHeading(announcements.heading);
    setSubHeading(announcements.subHeading);
  }, []);

  return (
    <Grid component="section" sx={{ paddingTop: "32px" }}>
      <header>
        <Typography variant="h3" component="h3">
          {heading}
        </Typography>
        <Typography variant="h4" component="h4">
          {subHeading}
        </Typography>
      </header>
      <AnnouncementGrid container component="section">
        <AnnouncementCardContainer />
      </AnnouncementGrid>
    </Grid>
  );
}

export default AnnouncementSection;
