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
  const [rotationalSpeed, setRotationSpeed] = useState(0.0); //km/h
  const [orbitalSpeed, setOrbitalSpeed] = useState(0.0); //km/s
  const [age, setAge] = useState(0.0); //billion years
  const [moons, setMoons] = useState([]);
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
          color={shadowColor}
          fontSize={0.5}
          maxWidth={4}
          lineHeight={1}
          letterSpacing={0.02}
        >
          CLICK ON THE PLANET Name:{props.name}.{" "}
          {/* to reverse the log 10 we did before  */}
          Rotational Speed:{Math.pow(10, rotationalSpeed).toFixed(2)}km/h.
          Orbital Speed:{orbitalSpeed} km/s. Age:{age} billion years old.
        </Text>
      </animated.mesh>
    );
  };

  function getPlanetInfos() {
    props.planetData.forEach((el) => {
      if (el.name === props.name) {
        setShadowColor(el.color); // * used as a prop for the planet component
        setRotationSpeed(Math.log10(el.rSpeed)); // * used as a prop for the planet component
        setOrbitalSpeed(el.oSpeed); // * used here for text infos
        setAge(el.age); // * used here for text infos
        setMoons(el.moons); // * used as a prop for the planet component
      }
    });
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
          moons={moons}
          args={[3, 50, 50]}
          // *  rotationalSpeed / 100 for a smoother display on the screen
          rotationalSpeed={rotationalSpeed / 100}
          shadowColor={shadowColor}
        />
        <AnimatedText />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCard;
