import React from "react";
import Moon from "../Moon";

const Deimos = () => {
  return (
    <Moon
      positionInCanvasX={[-15, -4, 5, 8, -15]}
      positionInCanvasY={[1, -1, -1, -1, 1]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      name={"Deimos"}
      orbitalSpeed={Math.log10(1.36)}
      // synchronous rotation
      rotationalSpeed={Math.log10(1.36)}
      radius={6.2}
      canvasRadius={1}
      fraction={546.6}
      distanceFromPlanet={23458}
    />
  );
};

export default Deimos;
