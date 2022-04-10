import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function DiscordBtn(props) {
  const { text } = props;
  return <Button variant="contained">{text}</Button>;
}

export default DiscordBtn;

DiscordBtn.propTypes = {
  text: PropTypes.string,
};

DiscordBtn.defaultProps = {
  text: "",
};
