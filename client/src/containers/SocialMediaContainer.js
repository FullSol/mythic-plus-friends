import React, { useState, useEffect } from "react";
import Social from "../components/social";
import { social as data } from "../data";

function SocialMediaContainer() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    // fetch("api/social")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setSocial(data);
    //   });
    setSocial(data);
  });

  return (
    <>
      {social.map((item) => (
        <Social key={item.id} type={item.type} link={item.link} />
      ))}
    </>
  );
}

export default SocialMediaContainer;
//
