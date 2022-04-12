import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function TitleCard(props) {
  const { title, subtitle, description } = props;
  return (
    <Paper
      component="header"
      sx={{
        backgroundColor: "rgba(0, 0, 0, .35)",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "16px",
        padding: "16px 16px 16px 16px",
      }}
    >
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <Typography variant="subtitle" component="h2">
        {subtitle}
      </Typography>
      <Typography variant="body1" component="p">
        {description}
      </Typography>
    </Paper>
  );
}

export default TitleCard;

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
