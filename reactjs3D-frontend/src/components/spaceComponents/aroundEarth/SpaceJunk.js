import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";

// import { Vector2 } from "three";
const SpaceJunk = () => {
  function SpaceJunk() {
    const metalTexture = useTexture("../textures/metal.jpg");
    const spaceJunkRotationSpeed = Math.log10(8); //km/s
    const [trigger, setTrigger] = useState(0);
    // const points = [];
    // for (let i = 0; i < 10; i++) {
    //   points.push(
    //     new Vector2(Math.sin((i - 0.8) * 0.5) * 0.5 + 1, (i - 3.8) * 0.2)
    //   );
    // }
    const { spring } = useSpring({
      spring: trigger,
      config: {
        mass: 50,
        tension: 200,
        friction: 50,
        precision: 0.0001,
        duration: 5000,
      },
    });
    const rotationZ = spring.to([0, 1], [0, Math.PI]);
    const positionZ = spring.to(
      [0, 0.25, 0.5, 0.75, 1],
      [1.5, 5.5, 2.5, -5, 1]
    );
    const positionX = spring.to([0, 0.25, 0.5, 0.75, 1], [4, 0, -5.5, -1, 4]);
    const positionY = spring.to([0, 0.25, 0.5, 0.75, 1], [0, 0.5, 1.5, 2.5, 0]);
    //to rotate all the shapes as a group(satelite)
    const groupRotationY = spring.to(
      [0, 0.25, 0.5, 0.75, 1],
      [
        Math.PI / 5,
        -Math.PI / 10,
        -Math.PI / 2,
        -Math.PI / 0.75,
        -Math.PI / 0.25,
      ]
    );
    const mesh = useRef();
    useFrame(() => {
      mesh.current.rotation.y = mesh.current.rotation.y +=
        spaceJunkRotationSpeed / 100;
      mesh.current.rotation.x = mesh.current.rotation.x +=
        spaceJunkRotationSpeed / 100;
      mesh.current.rotation.z = mesh.current.rotation.z +=
        spaceJunkRotationSpeed / 100;
    });

    return (
      // this group forms a satelite
      <animated.group
        ref={mesh}
        rotation-y={groupRotationY}
        position-x={positionX}
        position-y={positionY}
        position-z={positionZ}
      >
        <animated.mesh
          rotation-z={rotationZ}
          onClick={() => setTrigger(Number(!trigger))}
        >
          <ringGeometry attach="geometry" args={[0.5, 0.8, 8]} />
          <animated.meshStandardMaterial attach="material" map={metalTexture} />
        </animated.mesh>
        <animated.mesh
          rotation-x={Math.PI / 2}
          onClick={() => setTrigger(Number(!trigger))}
        >
          <cylinderGeometry
            attach="geometry"
            args={[0.2, 0.2, 2, 32, 32, false]}
          />
          <animated.meshStandardMaterial attach="material" map={metalTexture} />
        </animated.mesh>
        <animated.mesh
          rotation-x={Math.PI / 2}
          position-z={1.48}
          onClick={() => setTrigger(Number(!trigger))}
        >
          <sphereGeometry
            attach="geometry"
            args={[0.5, 15, 15, 0, Math.PI * 2.0, Math.PI * 0.1, Math.PI * 1.0]}
          />
          <animated.meshStandardMaterial attach="material" map={metalTexture} />
        </animated.mesh>
        <animated.mesh
          rotation-y={Math.PI / 2}
          position-y={1.4}
          onClick={() => setTrigger(Number(!trigger))}
        >
          <boxGeometry attach="geometry" args={[0.2, 1, 1]} />
          <animated.meshStandardMaterial
            metalness={0.5}
            attach="material"
            map={metalTexture}
          />
        </animated.mesh>
        <animated.mesh
          rotation-y={Math.PI / 2}
          position-y={-1.4}
          onClick={() => setTrigger(Number(!trigger))}
        >
          <boxGeometry attach="geometry" args={[0.2, 1, 1]} />
          <animated.meshStandardMaterial
            metalness={0.5}
            attach="material"
            map={metalTexture}
          />
        </animated.mesh>
        <animated.mesh
          rotation-x={Math.PI / 2}
          position-z={-1}
          onClick={() => setTrigger(Number(!trigger))}
        >
          <coneGeometry attach="geometry" args={[0.5, 0.5, 25]} />
          <animated.meshStandardMaterial attach="material" map={metalTexture} />
        </animated.mesh>
      </animated.group>
    );
  }
  return <SpaceJunk />;
};

export default SpaceJunk;
