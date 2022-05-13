import React, { useState, useEffect } from "react";
import { academyCard as data } from "../data";
import { AcademyCard } from "../components/cards";

function AcademyCardContainer() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // fetch data from api
    setTitle(data.title);
    setDescription(data.description);
  });

  return <AcademyCard title={title} description={description} />;
}

export default AcademyCardContainer;
