import React, { useState, useEffect } from "react";
import { siteInfo } from "../data";
import { TitleCard } from "../components/cards";

function TitleCardContainer() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // fetch("api/siteInfo")
    //   .then((response) => response.json())
    //   .then((siteInfo) => {
    //     const data = siteInfo.home;
    //     setTitle(data.title);
    //     setSubtitle(data.subtitle);
    //     setDescription(data.description);
    //   });
    const data = siteInfo.home;

    setTitle(data.title);
    setSubtitle(data.subtitle);
    setDescription(data.description);
  }, [siteInfo]);

  return (
    <TitleCard title={title} subtitle={subtitle} description={description} />
  );
}

export default TitleCardContainer;
