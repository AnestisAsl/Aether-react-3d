import React, { useState } from "react";
import Europa from "./GalileanMoons/Europa";
import Io from "./GalileanMoons/Io";
import Ganymede from "./GalileanMoons/Ganymede";
import Callisto from "./GalileanMoons/Callisto";
import { useSpring, animated } from "@react-spring/three";

const JovianSystem = () => {
  // * The distanceFromPlanetInCanvas in every Galilean Moon component represents
  // * with accuracy the distance of each moon from the planet Jupiter.
  const [trigger, setTrigger] = useState(0);
  // * The orbital speed of each Galilean Moon is the same and is defined from
  // * the duration property of rotationalSpring,for displaying purposes.
  const { rotationalSpring } = useSpring({
    rotationalSpring: trigger,
    config: {
      mass: 50,
      tension: 200,
      friction: 50,
      precision: 0.0001,
      // * since i animate the four Galilean moons as a group around the Y axis i cant use
      // * my formula for orbital speed.This is an experiential value.
      duration: 109000,
    },
  });
  const { rotateY } = useSpring({
    rotateY: rotationalSpring.to([0, 1], [0, 360]),
  });
  return (
    <animated.mesh
      rotation-y={rotateY}
      onClick={() => setTrigger(Number(!trigger))}
    >
      <Io />
      <Europa />
      <Ganymede />
      <Callisto />
    </animated.mesh>
  );
};

export default JovianSystem;
