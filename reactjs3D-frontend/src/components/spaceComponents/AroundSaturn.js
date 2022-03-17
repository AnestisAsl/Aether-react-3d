import React from "react";
import RingsOfSaturn from "./aroundSaturn/RingsOfSaturn";
import Titan from "./aroundSaturn/Titan";
import Enceladus from "./aroundSaturn/Enceladus";
const AroundSaturn = (props) => {
  return (
    <>
      <RingsOfSaturn />;
      <Titan infos={props.moons[1]} />
      <Enceladus infos={props.moons[0]} />
    </>
  );
};

export default AroundSaturn;
