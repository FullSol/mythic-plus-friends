import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function DiscordBtn(props) {
  const { text, link } = props;
  return (
    <Button href={link} target="-blank" variant="contained">
      {text}
    </Button>
  );
}

export default DiscordBtn;

DiscordBtn.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

DiscordBtn.defaultProps = {
  text: "",
  link: "",
};
