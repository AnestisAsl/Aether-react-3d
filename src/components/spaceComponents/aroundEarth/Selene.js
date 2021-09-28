import React from "react";
import Moon from "../Moon";

const Selene = () => {
  return (
    <Moon
      texture={"../textures/moon.jpg"}
      name={"Selene"}
      orbitalSpeed={Math.log10(1022)}
      rotationalSpeed={Math.log10(3683)}
      radius={1737.4}
      fraction={3.6}
      distanceFromPlanet={384400}
    />
  );
};

export default Selene;
