import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { softShadows, Text, Stats, OrbitControls } from "@react-three/drei";
import "../styles/planetCard.css";
import Planet from "./planet";

softShadows();
const PlanetCard = (props) => {
  const texture = "/textures/" + props.name + ".jpg";
  const [shadowColor, setShadowColor] = useState("");
  // using log scale for the vast differences at the rotation speeds
  const [rotationSpeed, setRotationSpeed] = useState(0.0);

  function getPlanetInfos() {
    switch (props.name) {
      case "Earth":
        setShadowColor("black");
        setRotationSpeed(Math.log10(1674));
        break;
      case "Neptune":
        setShadowColor("blue");
        setRotationSpeed(Math.log10(9.719));
        break;
      case "Mars":
        setShadowColor("red");
        setRotationSpeed(Math.log10(866));
        break;
      case "Mercury":
        setShadowColor("grey");
        setRotationSpeed(Math.log10(10.83));
        break;
      case "Saturn":
        setShadowColor("orange");
        setRotationSpeed(Math.log10(36.84));
        break;
      case "Sun":
        setShadowColor("brown");
        setRotationSpeed(Math.log10(7.189));
        break;
      case "Uranus":
        setShadowColor("lightgreen");
        setRotationSpeed(Math.log10(14.794));
        break;
      case "Venus":
        setShadowColor("orange");
        setRotationSpeed(Math.log10(6.52));
        break;
      case "Jupiter":
        setShadowColor("white");
        setRotationSpeed(Math.log10(45.583));
        break;
      default:
        setShadowColor("black");
    }
  }
  useEffect(() => {
    getPlanetInfos();
  });
  return (
    <Canvas
      colorManagement
      shadows="true"
      shadowMap
      camera={{ position: [0, 2, 10], fov: 60 }}
      className="planetCard"
    >
      <ambientLight intensity={0.3} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={1.5} />

      <Suspense fallback={null}>
        <Planet
          position={[-1, 2, 0]}
          texture={texture}
          name={props.name}
          args={[3, 50, 50]}
          // speed / 100 for a smoother display on the screen
          speed={rotationSpeed / 100}
          shadowColor={shadowColor}
        />
      </Suspense>
      <Text
        position={[10, 0, 0]}
        scale={[1, 1, 1]}
        color={"#EC2D2D"}
        fontSize={0.5}
        maxWidth={1}
        lineHeight={1}
        letterSpacing={0.02}
      >
        planet:{props.name}
      </Text>

      {/* <Stats /> */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default PlanetCard;
