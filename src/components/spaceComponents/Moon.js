import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";

const Moon = (props) => {
  console.table(props);
  const [trigger, setTrigger] = useState(0);
  const moonTexture = useTexture(props.texture);
  const moonName = props.name;
  const moonOrbitalSpeed = props.orbitalSpeed; //km/s
  const moonRotationSpeed = props.rotationalSpeed; //km/h
  const moonRadius = props.radius; //km
  const radiusFraction = props.fraction;
  const distanceFromPlanet = props.distanceFromPlanet; //km
  // * For different animation  argument between the components
  const positionInCanvasX = props.positionInCanvasX;
  const positionInCanvasY = props.positionInCanvasY;
  const positionInCanvasZ = props.positionInCanvasZ;

  const canvasRadius = props.canvasRadius; // * for displaying purposes
  // * the first way to make the orbital animation
  //   const { orbitSpring } = useSpring({
  //     orbitSpring: trigger,
  //     config: {
  //       mass: 500,
  //       tension: 200,
  //       friction: 50,
  //       precision: 0.0001,
  //       duration: 8000,
  //     },
  //   });
  //   const positionZ = orbitSpring.to([0, 0.25, 0.5, 0.75, 1], [-5, 6, 6, 0, -5]);
  //   const positionX = orbitSpring.to(
  //     [0, 0.25, 0.5, 0.75, 1],
  //     [-10, -4, 5, 10, -10]
  //   );
  //   const positionY = orbitSpring.to([0, 0.25, 0.5, 0.75, 1], [4, 1, 1, 2, 4]);

  // * the second way to make the orbital animation
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
    positionX: positionSpring.to(
      [0, 0.25, 0.5, 0.75, 1],
      props.positionInCanvasX
    ),
  });
  const { positionY } = useSpring({
    positionY: positionSpring.to(
      [0, 0.25, 0.5, 0.75, 1],
      props.positionInCanvasY
    ),
  });
  const { positionZ } = useSpring({
    positionZ: positionSpring.to(
      [0, 0.25, 0.5, 0.75, 1],

      props.positionInCanvasZ
    ),
  });

  // *  in case i want to rotate z-axis with react spring
  // *  i use useFrame hook to make a realistic comparison between the different
  // *  planet speeds ''+= speed ''. If i wanted to use react-spring i should
  // *  translate the speed of each planet to the duration of the animation.
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
      {
        // *  The planetCard components have radius=50(for displaying purposes),
        // *  so for a more realistic approach the moon should have radius of 0.072
        // *  because radiusFraction=earth radius/moon radius=3.6. }
      }
      <sphereGeometry attach="geometry" args={[props.canvasRadius, 20, 20]} />
      <animated.meshStandardMaterial attach="material" map={moonTexture} />
    </animated.mesh>
  );
};

export default Moon;
