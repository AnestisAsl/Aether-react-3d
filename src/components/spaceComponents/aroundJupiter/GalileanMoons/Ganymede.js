import React from "react";
import GalileanMoon from "../GalileanMoons";

const Ganymede = () => {
  const distanceFromPlanetInCanvas = Math.log10(1070000);
  return (
    <GalileanMoon
      positionInCanvas={[distanceFromPlanetInCanvas, 2, 0]}
      texture={"../textures/moon.jpg"}
      name={"Ganymede"}
      orbitalSpeed={Math.log10(10.88)}
      rotationalSpeed={Math.log10(9867600)}
      radius={2634.1}
      canvasRadius={1.8}
      fraction={26.5}
      distanceFromPlanet={1070000}
    />
  );
};

export default Ganymede;
