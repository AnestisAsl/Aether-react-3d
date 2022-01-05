import React, { Component } from "react";
import Moon from "../Moon";
const Titania = () => {
  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 6, -10]}
      positionInCanvasY={[1, 0, 0, 0, 1]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      name={"Titania"}
      orbitalSpeed={Math.log10(4.67)}
      rotationalSpeed={Math.log10(4.67)}
      radius={788.4}
      canvasRadius={2}
      fraction={32.16}
      distanceFromPlanet={410938}
    />
  );
};

export default Titania;
