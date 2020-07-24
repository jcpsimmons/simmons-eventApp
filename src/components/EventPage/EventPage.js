import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const corsHelper = `https://cors-anywhere.herokuapp.com/`;

const EPContainer = styled.div`
  background: rgb(107 103 162);
  border-radius: 5px;
  padding: 1rem;
  margin: auto;
  width: 80%;
  max-width: 500px;
  margin-top: 2rem;
`;

const prettify = (str) => {
  return str
    .split("_")
    .join(" ")
    .split(" ")
    .map((i) => `${i.charAt(0).toUpperCase()}${i.slice(1, i.length)}`)
    .join(" ");
};

export default function EventPage() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    const getData = async () => {
      await setLoading(true);
      let res = await fetch(
        // get 20 upcoming or live events
        `${corsHelper}https://api.smarkets.com/v3/events/${id}`
      );
      let data = await res.json();

      console.log(data);
      await setEventData(data.events[0]);
      await setLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner message="Loading Event Details" />
      ) : (
        <EPContainer>
          {Object.keys(eventData).map((evt) => {
            if (typeof eventData[evt] === "boolean") {
              return (
                <p>
                  <b>{prettify(evt)}</b>: {eventData[evt] ? "✅" : "❌"}
                </p>
              );
            } else if (eventData[evt] !== null) {
              return (
                <p>
                  <b>{prettify(evt)}</b>: {eventData[evt]}
                </p>
              );
            }
          })}
        </EPContainer>
      )}
    </div>
  );
}
