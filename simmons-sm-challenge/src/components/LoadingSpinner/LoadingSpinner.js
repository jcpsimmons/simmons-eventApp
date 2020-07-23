import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const SpinContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10%;
  h1 {
    color: #fff;
  }
`;

export default function LoadingSpinner({ message }) {
  const animationProps = useSpring({
    config: { duration: 700 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={animationProps}>
      <SpinContainer>
        <h1>{message}</h1>
        <CircularProgress color="secondary" />
      </SpinContainer>
    </animated.div>
  );
}
