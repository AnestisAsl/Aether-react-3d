import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { softShadows, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import "../styles/style.css";
import Loader from "../components/loader";
import Planet from "./planet";

softShadows();
const PlanetCard = (props) => {
  const texture = "/textures/" + props.name + ".jpg";

  const [shadowColor, setShadowColor] = useState("");
  // using log scale for the vast differences at the rotation speeds
  const [rotationSpeed, setRotationSpeed] = useState(0.0); //km/h
  const [orbitSpeed, setOrbitSpeed] = useState(0.0); //km/s
  const [age, setAge] = useState(0.0); //billion years
  const AnimatedText = () => {
    const [toScale, setToScale] = useState(false);
    const textAnimation = useSpring({
      scale: toScale ? [2, 2, 2] : [1, 1, 1],
    });
    return (
      <animated.mesh
        onClick={() => setToScale(!toScale)}
        scale={textAnimation.scale}
        position={[10, 2, -10]}
      >
        <Text
          // scale={[1, 1, 1]}
          color={shadowColor}
          fontSize={0.5}
          maxWidth={4}
          lineHeight={1}
          letterSpacing={0.02}
        >
          Planet:{props.name}. {/* to reverse the log 10 we did before  */}
          Rotational Speed:{Math.pow(10, rotationSpeed).toFixed(2)}km/h. Orbital
          Speed:{orbitSpeed} km/s. Age:{age} billion years old.
        </Text>
      </animated.mesh>
    );
  };

  function getPlanetInfos() {
    switch (props.name) {
      case "Earth":
        setShadowColor("black");
        setRotationSpeed(Math.log10(1674));
        setOrbitSpeed(30);
        setAge(4.543);
        break;
      case "Neptune":
        setShadowColor("blue");
        setRotationSpeed(Math.log10(9.719));
        setOrbitSpeed(5.43);
        setAge(4.503);
        break;
      case "Mars":
        setShadowColor("red");
        setRotationSpeed(Math.log10(866));
        setOrbitSpeed(26.5);
        setAge(4.603);
        break;
      case "Mercury":
        setShadowColor("grey");
        setRotationSpeed(Math.log10(10.83));
        setOrbitSpeed(47.87);
        setAge(4.503);
        break;
      case "Saturn":
        setShadowColor("orange");
        setRotationSpeed(Math.log10(36.84));
        setOrbitSpeed(9.68);
        setAge(4.503);
        break;
      case "Sun":
        setShadowColor("brown");
        setRotationSpeed(Math.log10(7.189));
        setOrbitSpeed(200);
        setAge(4.603);
        break;
      case "Uranus":
        setShadowColor("lightgreen");
        setRotationSpeed(Math.log10(14.794));
        setOrbitSpeed(7.11);
        setAge(4.503);
        break;
      case "Venus":
        setShadowColor("orange");
        setRotationSpeed(Math.log10(6.52));
        setOrbitSpeed(35.2);
        setAge(4.503);
        break;
      case "Jupiter":
        setShadowColor("white");
        setRotationSpeed(Math.log10(45.583));
        setOrbitSpeed(13.72);
        setAge(4.603);
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
      color="black"
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.3} />
        <directionalLight castShadow position={[0, 10, 0]} intensity={1.5} />
        <Planet
          position={[-1, 2, 0]}
          texture={texture}
          name={props.name}
          args={[3, 50, 50]}
          // *  speed / 100 for a smoother display on the screen
          speed={rotationSpeed / 100}
          shadowColor={shadowColor}
        />
        <AnimatedText />
        {/* <Stats /> */}
        {/* <OrbitControls /> */}
      </Suspense>
    </Canvas>
  );
};

export default PlanetCard;
