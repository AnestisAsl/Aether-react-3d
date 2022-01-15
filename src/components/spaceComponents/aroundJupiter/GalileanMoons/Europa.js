import React from "react";
import GalileanMoon from "../GalileanMoons";

const Europa = () => {
  const distanceFromPlanetInCanvas = Math.log10(670900);
  return (
    <GalileanMoon
      positionInCanvas={[-1, 2, distanceFromPlanetInCanvas]}
      texture={"../textures/moon.jpg"}
      name={"Europa"}
      orbitalSpeed={Math.log10(13.743)}
      rotationalSpeed={Math.log10(7290000)}
      radius={1560.8}
      canvasRadius={1}
      fraction={44.7}
      distanceFromPlanet={670900}
    />
  );
};

export default Europa;
