import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";

const Triton = () => {
  // TODO: USE MOON COMPONENT
  const [trigger, setTrigger] = useState(0);
  const tritonRotationSpeed = Math.log10(3683); //km/h
  const tritonOrbitalSpeed = Math.log10(4.39); //km/s
  const tritonRadius = 1353.4; //km
  const tritonTexture = useTexture("../textures/moon.jpg");
  const radiusFraction = 18.22;
  const distanceFromNeptune = 354800; //km

  const { positionSpring } = useSpring({
    // to: { positionSpring: 1 },
    // from: { positionSpring: 0 },
    // loop: true,
    positionSpring: trigger,
    config: {
      mass: 50,
      tension: 200,
      friction: 50,
      precision: 0.0001,
      duration: 5000,
    },
  });
  const { positionX } = useSpring({
    positionX: positionSpring.to([0, 0.25, 0.5, 0.75, 1], [-10, -4, 5, 8, -10]),
  });
  const { positionZ } = useSpring({
    positionZ: positionSpring.to(
      [0, 0.25, 0.5, 0.75, 1],
      [-5, 4.5, 4.5, 0, -5]
    ),
  });
  const { positionY } = useSpring({
    positionY: positionSpring.to([0, 0.25, 0.5, 0.75, 1], [4, 1, 1, 2, 4]),
  });

  const mesh = useRef();
  useFrame(
    () =>
      (mesh.current.rotation.y = mesh.current.rotation.y +=
        tritonRotationSpeed / 100)
  );

  function Triton() {
    return (
      <animated.mesh
        ref={mesh}
        position-x={positionX}
        position-y={positionY}
        position-z={positionZ}
        onClick={() => setTrigger(Number(!trigger))}
      >
        <sphereGeometry attach="geometry" args={[2, 20, 20]} />
        <animated.meshStandardMaterial attach="material" map={tritonTexture} />
      </animated.mesh>
    );
  }
  return <Triton />;
};

export default Triton;
