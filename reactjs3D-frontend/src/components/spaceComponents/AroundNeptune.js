import React from "react";
import Triton from "./aroundNeptune/Triton";

const AroundEarth = (props) => {
  return (
    <group>
      <Triton infos={props.moons[0]} />
    </group>
  );
};

export default AroundEarth;
