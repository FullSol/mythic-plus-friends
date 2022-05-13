import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TitleCardContainer from "../../../containers/TitleCardContainer";
import SocialMediaContainer from "../../../containers/SocialMediaContainer";
import DiscordServerBtnContainer from "../../../containers/DiscordServerBtnContainer";
import Logo from "../../logo";

const LogoBox = styled(Box)`
  position: absolute;
  top: -96px;
  right: -64px;
  z-index: -1;
  @media (min-width: 900px) {
    top: -50px;
    right: 80px;
  }
  @media (min-width: 1200px) {
    top: 80px;
    right: 85px;
  }
`;

const SectionGrid = styled(Grid)`
  position: relative;
  padding: 32px 0 32px 0;
  @media (min-width: 900px) {
    height: 100vh;
  }
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

const SocialBox = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  gap: 32px;
  @media (min-width: 900px) {
    position: absolute;
    flex-flow: row nowrap;
    justify-content: space-between;
    bottom: 100px;
    left: 200px;
    width: 100%;
  }
`;

function TopSection() {
  return (
    <SectionGrid component="section">
      <LogoBox component="p" sx={{ opacity: "100% !important" }}>
        <Logo />
      </LogoBox>
      <TitleCardContainer />
      <SocialBox component="section">
        <Grid
          component="p"
          sx={{ display: "flex", gap: "32px", justifyContent: "center" }}
        >
          <SocialMediaContainer />
        </Grid>
        <Grid item container sx={{ justifyContent: "center" }}>
          <DiscordServerBtnContainer />
        </Grid>
      </SocialBox>
    </SectionGrid>
  );
}

export default TopSection;
