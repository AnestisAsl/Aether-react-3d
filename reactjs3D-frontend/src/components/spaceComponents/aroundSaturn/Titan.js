import React from "react";
import Moon from "../Moon";

const Titan = (props) => {
  const infos = props.infos;

  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 6, -10]}
      positionInCanvasY={[5, 2, 2, 3, 5]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      canvasRadius={1}
      // fraction={22.6}
      name={infos.name}
      orbitalSpeed={Math.log10(infos.oSpeed)}
      rotationalSpeed={Math.log10(infos.rSpeed)}
      radius={infos.radius}
      distanceFromPlanet={infos.distanceFromPlanet}
    />
  );
};

export default Titan;
