import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import styled from "styled-components";

const LiContainer = styled.div`
  a {
    color: #333;
    text-decoration: none;
  }
`;

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ListElement({ game }) {
  return (
    <LiContainer>
      <ListItemLink href={`/event/${game.id}`} button>
        <ListItemText primary={game.name} />
      </ListItemLink>
    </LiContainer>
  );
}
