import React from "react";
import Avatar from "@mui/material/Avatar";

const Social = (props) => {
  const { icon, link } = props;
  <a href={link}>
    <Avatar>{icon}</Avatar>
  </a>;
};

export default Social;
