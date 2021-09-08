import React, { useState } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

// import { Vector2 } from "three";
const SpaceJunk = () => {
  function SpaceJunk() {
    const metalTexture = useTexture("../textures/metal.jpg");

    const [active, setActive] = useState(0);
    // const points = [];
    // for (let i = 0; i < 10; i++) {
    //   points.push(
    //     new Vector2(Math.sin((i - 0.8) * 0.5) * 0.5 + 1, (i - 3.8) * 0.2)
    //   );
    // }
    const { spring } = useSpring({
      spring: active,
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
    const positionX = spring.to(
      [0, 0.25, 0.5, 0.75, 1],
      [3.5, 0, -5.5, -1, 3.5]
    );
    const positionY = spring.to([0, 0.25, 0.5, 0.75, 1], [2, 0.5, 1.5, 2.5, 2]);
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

    return (
      // this group forms a satelite
      <animated.group
        rotation-y={groupRotationY}
        position-x={positionX}
        position-y={positionY}
        position-z={positionZ}
      >
        <animated.mesh
          rotation-z={rotationZ}
          onClick={() => setActive(Number(!active))}
        >
          <ringGeometry attach="geometry" args={[0.5, 0.8, 8]} />
          <animated.meshStandardMaterial attach="material" map={metalTexture} />
        </animated.mesh>
        <animated.mesh
          rotation-x={Math.PI / 2}
          onClick={() => setActive(Number(!active))}
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
          onClick={() => setActive(Number(!active))}
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
          onClick={() => setActive(Number(!active))}
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
          onClick={() => setActive(Number(!active))}
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
          onClick={() => setActive(Number(!active))}
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
