import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PropTypes from "prop-types";

function getIcon(iconType) {
  // Switch case to return the correct icon
  switch (iconType) {
    case "facebook":
      return <FacebookIcon sx={{ fontSize: "65px", opacity: ".56" }} />;
    case "twitter":
      return <TwitterIcon sx={{ fontSize: "65px", opacity: ".56" }} />;
    case "youtube":
      return <YouTubeIcon sx={{ fontSize: "65px", opacity: ".56" }} />;
    case "instagram":
      return <InstagramIcon sx={{ fontSize: "65px", opacity: ".56" }} />;
    default:
      return null;
  }
}

function Social(props) {
  const { type, link } = props;

  const [icon, setIcon] = useState("");

  useEffect(() => {
    // Set string lower case and get the icon
    setIcon(getIcon(type.toLowerCase()));
  }, [type]);

  // Don't return if there is nothing to return
  if (icon === "" || icon === null || link === null || link === "") {
    return null;
  }

  // Return the Avatar and the link
  return (
    <a href={link}>
      <Avatar
        sx={{
          height: 65,
          width: 65,
          backgroundColor: "rgba(255,255,255,0)",
          color: "info.light",
        }}
        component="span"
      >
        {icon}
      </Avatar>
    </a>
  );
}

Social.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Social.defaultProps = {
  link: "#",
};

export default Social;
