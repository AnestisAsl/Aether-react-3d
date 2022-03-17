import React from "react";
import Moon from "../Moon";
const Umbriel = (props) => {
  const infos = props.infos;

  return (
    <Moon
      positionInCanvasX={[-8, -4, 3, 6, -8]}
      positionInCanvasY={[5, 3, 3, 3, 5]}
      positionInCanvasZ={[-8, 6, 6, 0, -8]}
      texture={"../textures/moon.jpg"}
      canvasRadius={1}
      // fraction={43.37}
      name={infos.name}
      orbitalSpeed={Math.log10(infos.oSpeed)}
      rotationalSpeed={Math.log10(infos.rSpeed)}
      radius={infos.radius}
      distanceFromPlanet={infos.distanceFromPlanet}
    />
  );
};

export default Umbriel;
