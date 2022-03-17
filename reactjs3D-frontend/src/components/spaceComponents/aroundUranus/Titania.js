import React from "react";
import Moon from "../Moon";
const Titania = (props) => {
  const infos = props.infos;

  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 6, -10]}
      positionInCanvasY={[1, 0, 0, 0, 1]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      canvasRadius={2}
      // fraction={32.16}
      name={infos.name}
      orbitalSpeed={Math.log10(infos.oSpeed)}
      rotationalSpeed={Math.log10(infos.rSpeed)}
      radius={infos.radius}
      distanceFromPlanet={infos.distanceFromPlanet}
    />
  );
};

export default Titania;
