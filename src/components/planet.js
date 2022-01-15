import React, { useRef, useState, Suspense } from "react";
import { useTexture } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";
import AroundEarth from "./spaceComponents/AroundEarth";
import AroundNeptune from "./spaceComponents/AroundNeptune";
import AroundJupiter from "./spaceComponents/AroundJupiter";
import AroundMars from "./spaceComponents/AroundMars";
import AroundSaturn from "./spaceComponents/AroundSaturn";
import AroundUranus from "./spaceComponents/AroundUranus";
import AroundMercury from "./spaceComponents/AroundMercury";
import AroundVenus from "./spaceComponents/AroundVenus";

import Loader from "../components/loader";

const Planet = (props) => {
  const textureApplied = useTexture(props.texture);

  const AnimatedPlanet = ({ position, args, speed }) => {
    const [specialEffect, setSpecialEffect] = useState(false);
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
              <AroundMars />
            ) : props.name == "Mercury" ? (
              <AroundMercury />
            ) : props.name == "Saturn" ? (
              <AroundSaturn />
            ) : props.name == "Uranus" ? (
              <AroundUranus />
            ) : props.name == "Venus" ? (
              <AroundVenus />
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
      <Suspense fallback={<Loader />}>
        <AnimatedPlanet
          position={props.position}
          args={props.args}
          speed={props.speed}
        />
      </Suspense>
    </group>
  );
};

export default Planet;
