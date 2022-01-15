import React from "react";
import Deimos from "./aroundMars/Deimos";
import Phobos from "./aroundMars/Phobos";

const AroundMars = () => {
  return (
    <group>
      <Phobos />
      <Deimos />
    </group>
  );
};

export default AroundMars;
