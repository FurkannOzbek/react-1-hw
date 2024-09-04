import React from "react";
import { Box } from "@chakra-ui/react";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <img src={icon} height="20px" width="20px" alt={title} />
      <a href={url} style={{ marginBottom: "0", marginLeft: "0.5em" }}>
        {title}
      </a>
    </li>
  );
};
