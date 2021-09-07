import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
// import { useSpring, animated } from "@react-spring/three";
import "../styles/freeExplorationCanvas.css";
import Planet from "./planet";

function FreeExplorationCanvas() {
  return (
    <Canvas
      colorManagement
      shadows="true"
      shadowMap
      orthographic
      camera={{ position: [0, 0, 500] }}
      className="freeExplorationCavnas"
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <Suspense fallback={null}>
        <Planet
          position={[0, 0, 900]}
          texture="/textures/neptune.jpg"
          name="Neptune"
          args={[3.535, 32, 32]}
        />
        <Planet
          position={[0, 0, 576]}
          texture="/textures/uranus.jpg"
          name="Uranus"
          args={[3.642, 32, 32]}
        />
        <Planet
          position={[0, 0, 288]}
          texture="/textures/saturn.jpg"
          name="Saturn"
          args={[8.362, 32, 32]}
        />
        <Planet
          position={[0, 0, 156]}
          texture="/textures/jupiter.jpg"
          name="Jupiter"
          args={[10, 32, 32]}
        />
        <Planet
          position={[0, 0, 45]}
          texture="/textures/mars.jpg"
          name="Mars"
          args={[0.486, 32, 32]}
        />
        <Planet
          position={[0, 0, 30]}
          texture="/textures/earth.jpg"
          name="Earth"
          args={[0.914, 32, 32]}
        />
        <Planet
          position={[0, 0, 12]}
          texture="/textures/mercury.jpg"
          name="Mercury"
          args={[0.35, 32, 32]}
        />
        <Planet
          position={[0, 0, 21.6]}
          texture="/textures/venus.jpg"
          name="Venus"
          args={[0.869, 32, 32]}
        />
        <Planet
          position={[0, 0, -100]}
          texture="/textures/sun.jpg"
          name="Sun"
          args={[100, 32, 32]}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default FreeExplorationCanvas;
