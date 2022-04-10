import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

const Logo = (props) => {
  const { size } = props;
  return (
    <Avatar
      alt="mythic plus friends logo"
      src="/images/Finished_MythicLogos-1.png"
      component="p"
      sx={{ width: size, height: size }}
    />
  );
};

export default Logo;

Logo.propTypes = {
  size: PropTypes.number,
};

Logo.defaultProps = { size: 245 };
