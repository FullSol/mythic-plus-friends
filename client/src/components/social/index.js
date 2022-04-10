import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PropTypes from 'prop-types';

function getIcon(iconType) {
  // Switch case to return the correct icon
  switch (iconType) {
    case 'facebook':
      return <FacebookIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'youtube':
      return <YouTubeIcon />;
    case 'instagram':
      return <InstagramIcon />;
    default:
      return null;
  }
}

const Social = (props) => {
  const { type, link } = props;

  const [icon, setIcon] = useState('');

  useEffect(() => {
    // Set string lower case and get the icon
    setIcon(getIcon(type.toLowerCase()));
  }, [type]);

  // Don't return if there is nothing to return
  if (icon === '' || icon === null) {
    return null;
  }

  // Return the Avatar and the link
  return (
    <>
      <a href={link}>
        <Avatar>{icon}</Avatar>
      </a>
    </>
  );
};

Social.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Social.defaultProps = {
  link: '#',
};

export default Social;