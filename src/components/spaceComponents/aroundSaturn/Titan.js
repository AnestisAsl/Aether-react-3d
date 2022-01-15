import React from "react";
import Moon from "../Moon";

const Titan = () => {
  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 6, -10]}
      positionInCanvasY={[5, 2, 2, 3, 5]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      name={"Titan"}
      orbitalSpeed={Math.log10(5.57)}
      rotationalSpeed={Math.log10(5.57)}
      radius={2574.7}
      canvasRadius={1}
      fraction={22.6}
      distanceFromPlanet={1000000.2}
    />
  );
};

export default Titan;
