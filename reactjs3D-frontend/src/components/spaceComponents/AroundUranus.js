import React from "react";
import Titania from "./aroundUranus/Titania";
import Umbriel from "./aroundUranus/Umbriel";

const AroundUranus = (props) => {
  return (
    <>
      <Umbriel infos={props.moons[1]} />
      <Titania infos={props.moons[0]} />
    </>
  );
};

export default AroundUranus;
