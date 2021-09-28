import React, { Component } from "react";
import Selene from "./aroundEarth/Selene";
import SpaceJunk from "./aroundEarth/SpaceJunk";

const AroundEarth = () => {
  return (
    <group>
      <SpaceJunk />
      <Selene />
    </group>
  );
};

export default AroundEarth;
