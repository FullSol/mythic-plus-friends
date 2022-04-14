import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function AnnouncementCard(props) {
  const { img, title, description } = props;

  return (
    <Card sx={{ width: 345 }} component="article">
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent component="header">
        <Typography gutterBottom variant="h5" component="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions component="p">
        <Button size="small">Read more</Button>
      </CardActions>
    </Card>
  );
}

AnnouncementCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // slug: PropTypes.string,
};

AnnouncementCard.defaultProps = {
  img: "/images/Finished_MythicLogos-1.png",
  title: "Mythic Plus Friends",
  description: "Buillding a better mythic plus community",
  // slug: "#",
};

export default AnnouncementCard;
