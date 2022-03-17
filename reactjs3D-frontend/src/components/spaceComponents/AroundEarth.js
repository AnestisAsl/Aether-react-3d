import React, { useState, useEffect } from "react";
import Selene from "./aroundEarth/Selene";
import SpaceJunk from "./aroundEarth/SpaceJunk";

const AroundEarth = (props) => {
  return (
    <group>
      <SpaceJunk />
      <Selene infos={props.moons[0]} />
    </group>
  );
};

export default AroundEarth;
