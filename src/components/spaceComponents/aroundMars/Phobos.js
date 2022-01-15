import React from "react";
import Moon from "../Moon";

const Phobos = () => {
  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 8, -10]}
      positionInCanvasY={[4, 2, 2, 2, 4]}
      positionInCanvasZ={[-5, 6, 6, 0, -5]}
      texture={"../textures/moon.jpg"}
      name={"Phobos"}
      orbitalSpeed={Math.log10(2.138)}
      rotationalSpeed={Math.log10(11)}
      radius={11.267}
      canvasRadius={2}
      fraction={300.8}
      distanceFromPlanet={9234}
    />
  );
};

export default Phobos;
