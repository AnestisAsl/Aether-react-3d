import React from "react";
import Moon from "../Moon";

const Selene = () => {
  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 8, -10]}
      positionInCanvasY={[4, 1, 1, 2, 4]}
      positionInCanvasZ={[-5, 6, 6, 0, -5]}
      texture={"../textures/moon.jpg"}
      name={"Selene"}
      orbitalSpeed={Math.log10(1022)}
      rotationalSpeed={Math.log10(3683)}
      radius={1737.4}
      canvasRadius={2}
      fraction={3.6}
      distanceFromPlanet={384400}
    />
  );
};

export default Selene;
