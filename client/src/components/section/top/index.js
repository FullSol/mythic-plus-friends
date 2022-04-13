import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  siteInfo,
  social as socialLinks,
  discord as discordLink,
} from "../../../data";
import Loading from "../loading";
import { TitleCard } from "../../cards";
import Logo from "../../logo";
import Social from "../../social";

import DiscordBtn from "../../buttons";

const LogoBox = styled(Box)`
  position: absolute;
  top: -96px;
  right: -64px;
  z-index: -1;
`;

const SectionGrid = styled(Grid)`
  position: relative;
  padding: 32px 0 32px 0;
  &::after {
    content: "";
    background-image: url("/images/Progenitor.jpg");
    opacity: 0.36;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
  }
`;

function TopSection() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [social, setSocial] = useState([]);
  const [discord, setDiscord] = useState({});

  useEffect(() => {
    // api/sections/top
    const { home } = siteInfo;
    setTitle(home.title);
    setSubtitle(home.subtitle);
    setDescription(home.description);
    setSocial(socialLinks);
    setDiscord(discordLink);
  }, [title, subtitle, description]);

  if (title === "" || subtitle === "" || description === "") {
    return <Loading />;
  }

  return (
    <SectionGrid component="section">
      <LogoBox component="p" sx={{ opacity: "100% !important" }}>
        <Logo />
      </LogoBox>
      <TitleCard title={title} subtitle={subtitle} description={description} />
      <Box
        component="section"
        sx={{ display: "flex", flexFlow: "column nowrap", gap: "32px" }}
      >
        <Grid
          component="p"
          sx={{ display: "flex", gap: "32px", justifyContent: "center" }}
        >
          {social.map((item) => {
            console.log(item);
            return <Social key={item.id} type={item.type} link={item.link} />;
          })}
        </Grid>
        <Grid item container sx={{ justifyContent: "center" }}>
          <DiscordBtn text={discord.text} link={discord.link} />
        </Grid>
      </Box>
    </SectionGrid>
  );
}

export default TopSection;
