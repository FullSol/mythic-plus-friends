import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { siteInfo, announcements as announcementList } from "../../../data";

function AnnouncementSection(props) {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [annoucements, setAnnouncements] = useState({});

  useEffect(() => {
    // api/sections/announcements
    const { announcements } = siteInfo;
    setHeading(announcements.heading);
    setSubHeading(announcements.subHeading);
    setAnnouncements(announcementList);
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
    </Grid>
  );
}

export default AnnouncementSection;
