import React, { Component } from "react";
import JunkSpace from "./aroundEarth/SpaceJunk";
import Moon from "./aroundEarth/Moon";

const AroundEarth = () => {
  return (
    <group>
      <JunkSpace />
      <Moon />
    </group>
  );
};

export default AroundEarth;
