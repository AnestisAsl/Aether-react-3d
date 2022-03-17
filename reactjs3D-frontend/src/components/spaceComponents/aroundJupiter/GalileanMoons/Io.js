import React from "react";
import GalileanMoon from "../GalileanMoons";

const Io = () => {
  const distanceFromPlanetInCanvas = Math.log10(421600);
  return (
    <GalileanMoon
      positionInCanvas={[-distanceFromPlanetInCanvas, 2, 0]}
      texture={"../textures/moon.jpg"}
      name={"Io"}
      orbitalSpeed={Math.log10(17.3)}
      rotationalSpeed={Math.log10(271)}
      radius={1821.6}
      canvasRadius={1.2}
      fraction={38.3}
      distanceFromPlanet={421600}
    />
  );
};

export default Io;
