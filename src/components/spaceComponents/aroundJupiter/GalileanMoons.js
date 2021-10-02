import React from "react";
import Europa from "./Europa";
import Io from "./Io";
import Ganymede from "./Ganymede";

import { animated } from "@react-spring/three";
import Callisto from "./Callisto";

const GalileanMoons = () => {
  // TODO : ADD ANIMATION SO THE FOUR MOONS WILL MOVE TOGERTHER
  return (
    <animated.mesh>
      <Io />
      <Europa />
      <Ganymede />
      <Callisto />
    </animated.mesh>
  );
};

export default GalileanMoons;
