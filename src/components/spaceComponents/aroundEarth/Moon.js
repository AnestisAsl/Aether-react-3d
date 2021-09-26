import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";

const Moon = () => {
  function Moon() {
    const moonTexture = useTexture("../textures/moon.jpg");
    const [trigger, setTrigger] = useState(0);
    const moonOrbitalSpeed = Math.log10(1022); //km/s
    const moonRotationSpeed = Math.log10(3683); //km/h
    const moonRadius = 1737.4; //km
    const radiusFraction = 3.6;
    const distanceFromEarth = 384400; //km
    //the first way to make this animation the second one is at Triton.js component
    const { spring } = useSpring({
      spring: trigger,
      config: {
        mass: 500,
        tension: 200,
        friction: 50,
        precision: 0.0001,
        duration: 8000,
      },
    });
    const positionZ = spring.to([0, 0.25, 0.5, 0.75, 1], [-5, 6, 6, 0, -5]);
    const positionX = spring.to([0, 0.25, 0.5, 0.75, 1], [-10, -4, 5, 10, -10]);
    const positionY = spring.to([0, 0.25, 0.5, 0.75, 1], [4, 1, 1, 2, 4]);

    // const positionY = spring.to([0, 0.25, 0.5, 0.75, 1], [2, 0.5, 1.5, 2.5, 2]);
    // in case i want to rotate z-axis with react spring
    // i use useFrame hook to make a realistic comparison between the different
    // planet speeds ''+= speed ''. If i wanted to use react-spring i should
    // translate the speed of each planet to the duration of the animation.
    // const { rotationalSpring } = useSpring({
    //   to: { rotationalSpring: 1 },
    //   from: { rotationalSpring: 0 },
    //   loop: true,
    //   config: {
    //     mass: 50,
    //     tension: 200,
    //     friction: 50,
    //     precision: 0.0001,
    //     duration: 80000,
    //   },
    // });
    // const { rotateZ } = useSpring({
    //   rotateZ: rotationalSpring.to([0, 1], [0, 360]),
    // });
    const mesh = useRef();
    useFrame(
      () =>
        (mesh.current.rotation.y = mesh.current.rotation.y +=
          moonRotationSpeed / 100)
    );
    return (
      <animated.mesh
        ref={mesh}
        position-x={positionX}
        position-y={positionY}
        position-z={positionZ}
        onClick={() => setTrigger(Number(!trigger))}
      >
        {/* The planetCard components have radius=50(for displaying purposes),
        so for a more realistic approach the moon should have radius of 0.072
        because radiusFraction=earth radius/moon radius=3.6. */}
        <sphereGeometry attach="geometry" args={[2, 20, 20]} />
        <animated.meshStandardMaterial attach="material" map={moonTexture} />
      </animated.mesh>
    );
  }

  return <Moon />;
};

export default Moon;
