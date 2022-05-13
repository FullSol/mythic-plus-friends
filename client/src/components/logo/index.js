import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

function Logo(props) {
  const { size } = props;
  return (
    <Avatar
      alt="mythic plus friends logo"
      src="/images/Finished_MythicLogos-1.png"
      component="span"
      sx={{ width: size, height: size }}
    />
  );
}

export default Logo;

Logo.propTypes = {
  size: PropTypes.number,
};

Logo.defaultProps = { size: 245 };
