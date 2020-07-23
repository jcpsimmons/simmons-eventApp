import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import styled from "styled-components";

const LiContainer = styled.div`
  a {
    color: #333;
    text-decoration: none;
  }
`;

export default function ListElement({ game, index }) {
  return (
    <LiContainer>
      <ListItem key={`evt_${index}`} button>
        <a href={`/event/${game.id}`}>
          <ListItemText primary={game.name} />
        </a>
      </ListItem>
    </LiContainer>
  );
}
