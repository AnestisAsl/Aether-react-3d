import React, { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";
import AroundEarth from "./spaceComponents/AroundEarth";
import AroundNeptune from "./spaceComponents/AroundNeptune";
import AroundJupiter from "./spaceComponents/AroundJupiter";

const Planet = (props) => {
  const textureApplied = useTexture(props.texture);
  // console.table(props);

  const AnimatedPlanet = ({ position, args, speed }) => {
    const [specialEffect, setSpecialEffect] = useState(false);
    // console.log(specialEffect);
    const mesh = useRef();
    useFrame(
      () => (mesh.current.rotation.y = mesh.current.rotation.y += speed)
    );
    return (
      <group>
        <animated.mesh
          position={position}
          castShadow
          ref={mesh}
          onClick={() => setSpecialEffect(!specialEffect)}
        >
          <sphereGeometry attach="geometry" args={args} />
          <meshStandardMaterial attach="material" map={textureApplied} />
        </animated.mesh>
        {specialEffect ? (
          <animated.mesh>
            {props.name == "Earth" ? (
              <AroundEarth />
            ) : props.name == "Neptune" ? (
              <AroundNeptune />
            ) : props.name == "Sun" ? (
              <></>
            ) : props.name == "Jupiter" ? (
              <AroundJupiter />
            ) : props.name == "Mars" ? (
              <></>
            ) : props.name == "Mercury" ? (
              <></>
            ) : props.name == "Saturn" ? (
              <></>
            ) : props.name == "Uranus" ? (
              <></>
            ) : props.name == "Venus" ? (
              <></>
            ) : (
              <></>
            )}
          </animated.mesh>
        ) : (
          <></>
        )}
      </group>
    );
  };
  return (
    <group>
      {/* plane field for shadows */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.2, 0]}
        receiveShadow
      >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial
          attach="material"
          opacity={0.3}
          color={props.shadowColor}
        />
      </mesh>
      <AnimatedPlanet
        position={props.position}
        args={props.args}
        speed={props.speed}
      />
    </group>
  );
};

export default Planet;
