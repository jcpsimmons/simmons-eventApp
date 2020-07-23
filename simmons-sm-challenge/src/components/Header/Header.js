import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const HeaderContainer = styled.header`
  display: flex;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  background: rgb(66, 51, 255);
  background: linear-gradient(
    48deg,
    rgba(66, 51, 255, 1) 0%,
    rgba(210, 148, 233, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  align-items: center;

  & > * {
    margin: auto;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Typography variant="h3" component="h1">
        <a href="/">Smarkets Top Events </a>
      </Typography>

      <Typography variant="h5" component="h2">
        <a href="https://jcsdesign.me">by Josh Simmons</a>
      </Typography>
    </HeaderContainer>
  );
}
