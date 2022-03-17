import React from "react";
import Moon from "../Moon";

const Deimos = (props) => {
  const infos = props.infos;

  return (
    <Moon
      positionInCanvasX={[-15, -4, 5, 8, -15]}
      positionInCanvasY={[1, -1, -1, -1, 1]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      // synchronous rotation
      canvasRadius={1}
      // fraction={546.6}
      name={infos.name}
      orbitalSpeed={Math.log10(infos.oSpeed)}
      rotationalSpeed={Math.log10(infos.rSpeed)}
      radius={infos.radius}
      distanceFromPlanet={infos.distanceFromPlanet}
    />
  );
};

export default Deimos;
