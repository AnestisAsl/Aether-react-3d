import React from "react";
import Moon from "../Moon";
const Umbriel = () => {
  return (
    <Moon
      positionInCanvasX={[-8, -4, 3, 6, -8]}
      positionInCanvasY={[5, 3, 3, 3, 5]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      name={"Umbriel"}
      orbitalSpeed={Math.log10(4.67)}
      rotationalSpeed={Math.log10(4.67)}
      radius={584.7}
      canvasRadius={1}
      fraction={43.37}
      distanceFromPlanet={240638}
    />
  );
};

export default Umbriel;
