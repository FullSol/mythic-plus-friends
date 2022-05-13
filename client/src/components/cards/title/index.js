import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const StyedPaper = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  padding: 16px 16px 16px 16px;
  @media (min-width: 900px) {
    position: absolute;
    max-width: 827px;
    top: 100px;
    left: 100px;
  }
  @media (min-width: 1200px) {
    top: calc(25vh);
  }
`;

function TitleCard(props) {
  const { title, subtitle, description } = props;
  return (
    <StyedPaper component="header" sx={{}}>
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <Typography variant="subtitle" component="h2">
        {subtitle}
      </Typography>
      <Typography variant="body1" component="p">
        {description}
      </Typography>
    </StyedPaper>
  );
}

export default TitleCard;

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
