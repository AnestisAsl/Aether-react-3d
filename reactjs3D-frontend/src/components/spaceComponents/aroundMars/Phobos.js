import React from "react";
import Moon from "../Moon";

const Phobos = (props) => {
  const infos = props.infos;
  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 8, -10]}
      positionInCanvasY={[4, 2, 2, 2, 4]}
      positionInCanvasZ={[-5, 6, 6, 0, -5]}
      texture={"../textures/moon.jpg"}
      canvasRadius={2}
      // fraction={300.8}
      name={infos.name}
      orbitalSpeed={Math.log10(infos.oSpeed)}
      rotationalSpeed={Math.log10(infos.rSpeed)}
      radius={infos.radius}
      distanceFromPlanet={infos.distanceFromPlanet}
    />
  );
};

export default Phobos;
