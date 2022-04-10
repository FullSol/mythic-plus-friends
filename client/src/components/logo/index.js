import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

function Logo(props) {
  const { width, height } = props;
  return (
    <Avatar
      alt="mythic plus friends logo"
      src="/images/Finished_MythicLogos-1.png"
      component="p"
      sx={{ width: width, height: height }}
    />
  );
}

export default Logo;

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Logo.defaultProps = { width: 245, height: 245 };
