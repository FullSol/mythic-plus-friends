import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { siteInfo, social as socialLinks } from "../../../data";
import Loading from "../loading";
import { TitleCard } from "../../cards";
import Logo from "../../logo";
import Social from "../../social";
import DiscordBtn from "../../buttons";

const StyledBox = styled(Box)`
  display: flex;
  gap: 32px;
`;

const LogoBox = styled(Box)`
  position: absolute;
  top: -96px;
  right: -64px;
  z-index: -1;
`;

function TopSection() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [social, setSocial] = useState([]);
  const [discord, setDiscord] = useState({
    text: "Join our discrod server",
    link: "https://mpf.gg",
  });

  useEffect(() => {
    // api/sections/top
    const { home } = siteInfo;
    setTitle(home.title);
    setSubtitle(home.subtitle);
    setDescription(home.description);
    setSocial(socialLinks);
  }, [title, subtitle, description]);

  if (title === "" || subtitle === "" || description === "") {
    return <Loading />;
  }

  return (
    <Grid component="section" sx={{ marginTop: "64px" }}>
      <LogoBox component="p">
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
    </Grid>
  );
}

export default TopSection;
