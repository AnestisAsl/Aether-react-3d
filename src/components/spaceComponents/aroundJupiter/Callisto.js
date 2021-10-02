import React from "react";
import Moon from "../Moon";

const Callisto = () => {
  return (
    <Moon
      positionInCanvasX={[10, -4, 5, 8, 10]}
      positionInCanvasY={[4, 1, 1, 2, 4]}
      positionInCanvasZ={[-5, 4.5, 4, 0, -5]}
      texture={"../textures/moon.jpg"}
      name={"Callisto"}
      orbitalSpeed={Math.log10(8204)}
      rotationalSpeed={Math.log10(8784000)}
      radius={2410.3}
      canvasRadius={1.65}
      fraction={29}
      distanceFromPlanet={1883000}
    />
  );
};

export default Callisto;
