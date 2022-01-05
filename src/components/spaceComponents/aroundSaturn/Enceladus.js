import React, { Component } from "react";
import Moon from "../Moon";

const Enceladus = () => {
  return (
    <Moon
      positionInCanvasX={[10, 4, -5, -6, 10]}
      positionInCanvasY={[5, 2, 2, 3, 5]}
      positionInCanvasZ={[-6, 4, 4, -2, -6]}
      texture={"../textures/moon.jpg"}
      name={"Enceladus"}
      orbitalSpeed={Math.log10(12.64)}
      rotationalSpeed={Math.log10(12.64)}
      radius={252.1}
      canvasRadius={0.5}
      fraction={230.9}
      distanceFromPlanet={1221830}
    />
  );
};

export default Enceladus;
