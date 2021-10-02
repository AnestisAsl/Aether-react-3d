import React from "react";
import Moon from "../Moon";

const Io = () => {
  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 8, -10]}
      positionInCanvasY={[4, 1, 1, 2, 4]}
      positionInCanvasZ={[-5, 4.5, 4, 0, -5]}
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
