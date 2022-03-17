import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";

const GalileanMoon = (props) => {
  // * same as the Moon.js but without animations so i can animate the four moons
  // * like one.
  console.table(props);
  const moonTexture = useTexture(props.texture);
  const moonName = props.name;
  const moonOrbitalSpeed = props.orbitalSpeed; //km/s
  const moonRotationSpeed = props.rotationalSpeed; //km/h
  const moonRadius = props.radius; //km
  const radiusFraction = props.fraction;
  const distanceFromPlanet = props.distanceFromPlanet; //km
  // * for displaying purposes ,they reprsent accurately in relation the four moons.
  const canvasRadius = props.canvasRadius;
  const positionInCanvas = props.positionInCanvas;
  const mesh = useRef();
  useFrame(
    () =>
      (mesh.current.rotation.y = mesh.current.rotation.y +=
        moonRotationSpeed / 100)
  );
  return (
    <animated.mesh
      ref={mesh}
      position={[
        props.positionInCanvas[0],
        props.positionInCanvas[1],
        props.positionInCanvas[2],
      ]}
    >
      <sphereGeometry attach="geometry" args={[props.canvasRadius, 20, 20]} />
      <animated.meshStandardMaterial attach="material" map={moonTexture} />
    </animated.mesh>
  );
};

export default GalileanMoon;
