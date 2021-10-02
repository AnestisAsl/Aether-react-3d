import React from "react";
import Moon from "../Moon";

const Ganymede = () => {
  return (
    <Moon
      positionInCanvasX={[6, -4, 5, 8, -10]}
      positionInCanvasY={[4, 1, 1, 2, 4]}
      positionInCanvasZ={[-5, 4.5, 4, 0, -5]}
      texture={"../textures/moon.jpg"}
      name={"Ganymede"}
      orbitalSpeed={Math.log10(10880)}
      rotationalSpeed={Math.log10(9867600)}
      radius={2634.1}
      canvasRadius={1.8}
      fraction={26.5}
      distanceFromPlanet={1070000}
    />
  );
};

export default Ganymede;
