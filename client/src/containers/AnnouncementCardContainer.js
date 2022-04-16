import React, { useState, useEffect } from "react";
import { announcements as data } from "../data";
import { AnnouncementCard } from "../components/cards";

function AnnuoncementCardContainer() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // fetch("api/announcements")
    //   .then((response) => response.json())
    //   .then((data) => setAnnouncements(data));
    setAnnouncements(data);
  }, []);

  return (
    <>
      {announcements.map((item) => (
        <AnnouncementCard
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}

export default AnnuoncementCardContainer;
