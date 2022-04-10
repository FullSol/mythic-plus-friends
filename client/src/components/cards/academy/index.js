import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Logo from "../../logo";

function AcademyCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleClick = () => {
    console.log(link);
  };

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
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

export default AcademyCard;
