import React, { useState } from "react";
import FreeExplorationCanvas from "./components/freeExplorationCanvas";
import PlanetCard from "./components/planetCard";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./styles/style.css";

function App() {
  const [planetName, setPlanetName] = useState("Earth");
  function getPlanetName(buttonName) {
    setPlanetName(buttonName);
    console.log(planetName);
    return planetName;
  }
  return (
    <>
      <div className="background" />
      <div className="menu">
        <h1>welcome</h1>
        <h4>choose a planet</h4>
        <ul>
          <button onClick={() => getPlanetName("Neptune")}>Neptune</button>
          <button onClick={() => getPlanetName("Earth")}>Earth</button>
          <button onClick={() => getPlanetName("Jupiter")}>Jupiter</button>
          <button onClick={() => getPlanetName("Mars")}>Mars</button>
          <button onClick={() => getPlanetName("Mercury")}>Mercury</button>
          <button onClick={() => getPlanetName("Saturn")}>Saturn</button>
          <button onClick={() => getPlanetName("Sun")}>Sun</button>
          <button onClick={() => getPlanetName("Uranus")}>Uranus</button>
          <button onClick={() => getPlanetName("Venus")}>Venus</button>
        </ul>{" "}
      </div>
      <Parallax pages={3}>
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
        {/* <FreeExplorationCanvas /> */}
        <ParallaxLayer
          offset={0.8}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {/* export se component na pairnw to name kai na bgazw tis katallhles plhrofoies */}
          <p>
            name : "adsad"
            <br />
            speed : 15km/h
            <br />
          </p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
