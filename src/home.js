import React, { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { useSpring, config, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import PlanetCard from "./components/planetCard";
import Informations from "./components/informations";
import WhatIsAether from "./components/whatIsAether";
import "./styles/style.css";

function Home() {
  const [planetName, setPlanetName] = useState("Earth");
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  function getPlanetName(buttonName) {
    setPlanetName(buttonName);
    ref.current.scrollTo(0);
    return planetName;
  }

  const animationPropsUl = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: trigger ? 1 : 0,
    },
    config: config.slow,
  });

  return (
    <>
      <div className="background" />
      <div className="navBar">
        <div className="header">
          <h1 className="name">Aether</h1>
          <div className="headerButtonContainer">
            <button
              onClick={() => {
                navigate("/LogIn");
              }}
            >
              Charts
            </button>
            <button
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              About
            </button>
          </div>
        </div>
        <h4>Choose a planet to begin your solar journay.</h4>

        <div className="menu">
          <animated.button
            className="menuButton"
            onClick={() => setTrigger(!trigger)}
          >
            {trigger ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
            Planets
          </animated.button>
          <animated.ul className="planetList" style={animationPropsUl}>
            <button onClick={() => getPlanetName("Neptune")}>Neptune</button>
            <button onClick={() => getPlanetName("Earth")}>Earth</button>
            <button onClick={() => getPlanetName("Jupiter")}>Jupiter</button>
            <button onClick={() => getPlanetName("Mars")}>Mars</button>
            <button onClick={() => getPlanetName("Mercury")}>Mercury</button>
            <button onClick={() => getPlanetName("Saturn")}>Saturn</button>
            <button onClick={() => getPlanetName("Sun")}>Sun</button>
            <button onClick={() => getPlanetName("Uranus")}>Uranus</button>
            <button onClick={() => getPlanetName("Venus")}>Venus</button>
          </animated.ul>{" "}
        </div>
      </div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <PlanetCard name={planetName} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WhatIsAether />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={0.5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Informations planetName={planetName} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>charts</h1>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
