import React from "react";
import Moon from "../Moon";

const Europa = () => {
  return (
    <Moon
      positionInCanvasX={[-8, -4, 5, 8, -8]}
      positionInCanvasY={[2, 0, 0, 2, 2]}
      positionInCanvasZ={[-1, 4.5, 4, 0, -1]}
      texture={"../textures/moon.jpg"}
      name={"Europa"}
      orbitalSpeed={Math.log10(13743.36)}
      rotationalSpeed={Math.log10(7290000)}
      radius={1560.8}
      canvasRadius={1}
      fraction={44.7}
      distanceFromPlanet={670900}
    />
  );
};

export default Europa;
