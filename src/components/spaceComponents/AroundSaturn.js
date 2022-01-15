import React from "react";
import RingsOfSaturn from "./aroundSaturn/RingsOfSaturn";
import Titan from "./aroundSaturn/Titan";
import Enceladus from "./aroundSaturn/Enceladus";
const AroundSaturn = () => {
  return (
    <>
      <RingsOfSaturn />;
      <Titan />
      <Enceladus />
    </>
  );
};

export default AroundSaturn;
