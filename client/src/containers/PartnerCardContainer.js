import React, { useState, useEffect } from "react";
import { partners as data } from "../data";
import { PartnerCard } from "../components/cards";

function PartnerCardContainer() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // fetch("api/partners")
    //   .then((response) => response.json())
    //   .then((data) => setAnnouncements(data));
    setPartners(data);
  }, [data]);

  return (
    <>
      {partners.map((item) => (
        <PartnerCard
          key={item.id}
          img={item.img}
          name={item.name}
          link={item.link}
        />
      ))}
    </>
  );
}

export default PartnerCardContainer;
