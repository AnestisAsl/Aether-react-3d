import React, { useEffect, useState } from "react";
import Deimos from "./aroundMars/Deimos";
import Phobos from "./aroundMars/Phobos";

const AroundMars = (props) => {
  console.log(props);
  return (
    <group>
      <Phobos infos={props.moons[0]} />
      <Deimos infos={props.moons[1]} />
    </group>
  );
};

export default AroundMars;
