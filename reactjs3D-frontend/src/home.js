import React, { useState, useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { useSpring, config, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import PlanetCard from "./components/planetCard";
import Informations from "./components/informations";
import WhatIsAether from "./components/whatIsAether";
import axios from "axios";

function Home() {
  // * for testing purposes, obj represents the data received by http request
  // const obj = [
  //   {
  //     name: "Earth",
  //     rSpeed: 1674,
  //     oSpeed: 30,
  //     radius: 6371,
  //     color: "black",
  //     age: 4.503,
  //     moons: [
  //       {
  //         name: "Selene",
  //         rSpeed: 3683,
  //         oSpeed: 1.022,
  //         radius: 1737.4,
  //         distanceFromPlanet: 384400,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Jupiter",
  //     rSpeed: 45061.6,
  //     oSpeed: 13.06,
  //     radius: 69911,
  //     color: "white",
  //     age: 4.603,
  //     moons: [
  //       {
  //         name: "Callisto",
  //         rSpeed: 8784000,
  //         oSpeed: 8.204,
  //         radius: 2410.3,
  //         distanceFromPlanet: 1883000,
  //       },
  //       {
  //         name: "Io",
  //         rSpeed: 271,
  //         oSpeed: 17.3,
  //         radius: 1821.6,
  //         distanceFromPlanet: 421600,
  //       },
  //       {
  //         name: "Europa",
  //         rSpeed: 7290000,
  //         oSpeed: 13.743,
  //         radius: 1560.8,
  //         distanceFromPlanet: 670900,
  //       },
  //       {
  //         name: "Ganymede",
  //         rSpeed: 9867600,
  //         oSpeed: 10.88,
  //         radius: 2634.1,
  //         distanceFromPlanet: 1070000,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Mars",
  //     rSpeed: 868.22,
  //     oSpeed: 26.5,
  //     radius: 3389.5,
  //     color: "red",
  //     age: 4.603,
  //     moons: [
  //       {
  //         name: "Phobos",
  //         rSpeed: 11,
  //         oSpeed: 2.138,
  //         radius: 11.267,
  //         distanceFromPlanet: 9234,
  //       },
  //       {
  //         name: "Deimos",
  //         rSpeed: 1.36,
  //         oSpeed: 1.36,
  //         radius: 6.2,
  //         distanceFromPlanet: 23458,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Neptune",
  //     rSpeed: 9.65,
  //     oSpeed: 5.43,
  //     radius: 24622,
  //     color: "blue",
  //     age: 4.503,
  //     moons: [
  //       {
  //         name: "Triton",
  //         rSpeed: 9650,
  //         oSpeed: 4.39,
  //         radius: 1353.4,
  //         distanceFromPlanet: 354800,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Saturn",
  //     rSpeed: 35500,
  //     oSpeed: 9.68,
  //     radius: 58232,
  //     color: "orange",
  //     age: 4.503,
  //     moons: [
  //       {
  //         name: "Enceladus",
  //         rSpeed: 12.64,
  //         oSpeed: 12.64,
  //         radius: 252.1,
  //         distanceFromPlanet: 1221830,
  //       },
  //       {
  //         name: "Titan",
  //         rSpeed: 5.57,
  //         oSpeed: 5.57,
  //         radius: 2574.7,
  //         distanceFromPlanet: 1000000.2,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Uranus",
  //     rSpeed: 9320,
  //     oSpeed: 6.83,
  //     radius: 25362,
  //     color: "lightgreen",
  //     age: 4.503,
  //     moons: [
  //       {
  //         name: "Titania",
  //         rSpeed: 4.67,
  //         oSpeed: 4.67,
  //         radius: 788.4,
  //         distanceFromPlanet: 410938,
  //       },
  //       {
  //         name: "Umbriel",
  //         rSpeed: 4.67,
  //         oSpeed: 4.67,
  //         radius: 584.7,
  //         distanceFromPlanet: 240638,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Mercury",
  //     rSpeed: 10.83,
  //     oSpeed: 47.87,
  //     radius: 2439.7,
  //     color: "grey",
  //     age: 4.503,
  //     moons: [],
  //   },
  //   {
  //     name: "Sun",
  //     rSpeed: 7.189,
  //     oSpeed: 200,
  //     radius: 695340,
  //     color: "brown",
  //     age: 4.603,
  //     moons: [],
  //   },
  //   {
  //     name: "Venus",
  //     rSpeed: 6.52,
  //     oSpeed: 35.02,
  //     radius: 6051.8,
  //     color: "orange",
  //     age: 4.503,
  //     moons: [],
  //   },
  // ];
  const [planetName, setPlanetName] = useState("Earth");
  const [trigger, setTrigger] = useState(false);
  const [planetInfos, setPlanetInfos] = useState([]);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:4000/`).then((res) => {
          setPlanetInfos(res.data);
        });
      } catch (err) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      }
    };
    fetchData();
  }, []);
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
                navigate("/Charts");
              }}
            >
              Charts
            </button>
            <button
              onClick={() => {
                navigate("/About");
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
          <PlanetCard name={planetName} planetData={planetInfos} />
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
          <h1>Charts</h1>
          <p className="homeInfos">
            Aether also visualises the informations with charts and diagrams,
            <br />
            thanks to the recharts library.Click on the 'Charts' section to
            check them.
          </p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
