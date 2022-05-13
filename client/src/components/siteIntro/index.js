import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import siteInfo from "../../data";

function SiteIntro() {
  const [title, setTitle] = useState("Title");
  const [subtitle, setSubtitle] = useState("Sub Title");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  useEffect(() => {
    if (siteInfo.title) {
      setTitle(siteInfo.title);
    }

    if (siteInfo.subtitle) {
      setSubtitle(siteInfo.subtitle);
    }

    if (siteInfo.description) {
      setDescription(siteInfo.description);
    }
  });

  return (
    <Paper
      component="section"
      sx={{
        display: "flex",
        textAlign: "left",
        flexFlow: "column nowrap",
        gap: "32px",
      }}
    >
      <Box component="header">
        <Typography variant="h1" component="h1">
          {title}
        </Typography>
        <Typography variant="subtitle" component="h2">
          {subtitle}
        </Typography>
      </Box>
      <Typography variant="p" component="p">
        {description}
      </Typography>
    </Paper>
  );
}

export default SiteIntro;
