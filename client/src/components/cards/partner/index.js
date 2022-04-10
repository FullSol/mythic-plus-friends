import React from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";

function PartnerCard(props) {
  const { img, link, name } = props;
  return (
    <Paper
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      elevation={0}
    >
      <Link
        href={link}
        sx={{ textDecoration: "none", color: "text.secondary" }}
      >
        <Avatar
          src={img}
          component="p"
          sx={{
            margin: "0 auto",
            width: 228,
            height: 228,
          }}
        />

        <Typography variant="h4" component="p" sx={{ textAlign: "center" }}>
          {name}
        </Typography>
      </Link>
    </Paper>
  );
}

PartnerCard.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};

PartnerCard.defaultProps = {
  img: "/images/Finished_MythicLogos.png",
  link: "#",
  name: "Partner",
};

export default PartnerCard;
