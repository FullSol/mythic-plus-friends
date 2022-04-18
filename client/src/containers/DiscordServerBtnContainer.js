import React, { useState, useEffect } from "react";
import DiscordBtn from "../components/buttons";
import { discord as data } from "../data";

function DiscordServerBtnContainer() {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setText(data.text);
    setLink(data.link);
  });

  return <DiscordBtn text={text} link={link} />;
}

export default DiscordServerBtnContainer;
