import React from "react";
import Moon from "../Moon";

const Enceladus = (props) => {
  const infos = props.infos;

  return (
    <Moon
      positionInCanvasX={[10, 4, -5, -6, 10]}
      positionInCanvasY={[5, 2, 2, 3, 5]}
      positionInCanvasZ={[-6, 4, 4, -2, -6]}
      texture={"../textures/moon.jpg"}
      canvasRadius={0.5}
      // fraction={230.9}
      name={infos.name}
      orbitalSpeed={Math.log10(infos.oSpeed)}
      rotationalSpeed={Math.log10(infos.rSpeed)}
      radius={infos.radius}
      distanceFromPlanet={infos.distanceFromPlanet}
    />
  );
};

export default Enceladus;
