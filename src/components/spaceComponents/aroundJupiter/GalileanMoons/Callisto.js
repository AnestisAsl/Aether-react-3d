import React from "react";
import GalileanMoon from "../GalileanMoons";

const Callisto = () => {
  const distanceFromPlanetInCanvas = Math.log10(1883000);
  return (
    <GalileanMoon
      positionInCanvas={[-1, 2, -distanceFromPlanetInCanvas]}
      texture={"../textures/moon.jpg"}
      name={"Callisto"}
      orbitalSpeed={Math.log10(8.204)}
      rotationalSpeed={Math.log10(8784000)}
      radius={2410.3}
      canvasRadius={1.6}
      fraction={29}
      distanceFromPlanet={1883000}
    />
  );
};

export default Callisto;
