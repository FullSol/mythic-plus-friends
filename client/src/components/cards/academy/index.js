import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function AcademyCard(props) {
  const { title, description, btnText } = props;
  const handleClick = () => {};

  return (
    <Card sx={{ maxWidth: 345 }} component="article">
      <CardContent component="header">
        <Typography gutterBottom variant="h5" component="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions component="p">
        <Button onClick={handleClick} size="small">
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
}

AcademyCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  btnText: PropTypes.string,
};

AcademyCard.defaultProps = {
  title: "Blank",
  description: "Blank",
  btnText: "Read More",
};

export default AcademyCard;
