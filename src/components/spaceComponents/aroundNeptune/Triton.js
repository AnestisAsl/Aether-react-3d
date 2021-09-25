import React, { useState } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

const Triton = () => {
  const [trigger, setTrigger] = useState(0);
  const tritonRotationSpeed = Math.log10(3683); //km/h
  const tritonOrbitalSpeed = Math.log10(4.39); //km/s
  const tritonTexture = useTexture("../textures/moon.jpg");
  const moonRadius = 1353.4; //km

  function Triton() {
    return (
      <animated.mesh
        position-x={-10}
        position-y={2}
        position-z={-10}
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
