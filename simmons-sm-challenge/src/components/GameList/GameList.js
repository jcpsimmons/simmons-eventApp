import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ListElement from "./ListElement";
const corsHelper = `https://cors-anywhere.herokuapp.com/`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  > * {
    margin: auto;
    width: 100%;
    max-width: 360px;
    background-color: lightgrey;
    border-radius: 5px;
  }

  .MuiListItem-button:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export default function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  let idx = 0;
  useEffect(() => {
    const getData = async () => {
      await setLoading(true);
      let res = await fetch(
        // get 20 upcoming or live events
        `${corsHelper}https://api.smarkets.com/v3/popular/event_ids/?limit=20&state=upcoming&state=live`
      );
      let data = await res.json();

      res = await fetch(
        `${corsHelper}https://api.smarkets.com/v3/events/${data[
          "popular_event_ids"
        ].join(",")}`
      );
      data = await res.json();
      console.log(data);
      await setGames(data.events);
      await setLoading(false);
    };
    getData();
  }, []);

  const animationProps = useSpring({
    config: { duration: 700 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={animationProps}>
      {loading ? (
        <LoadingSpinner message="Retrieving Events" />
      ) : (
        <ListContainer>
          <List component="nav" aria-label="main mailbox folders">
            {games.map((game) => {
              idx++;
              return (
                <ListElement key={`gamesli_idx`} game={game} index={idx} />
              );
            })}
          </List>
        </ListContainer>
      )}
    </animated.div>
  );
}
