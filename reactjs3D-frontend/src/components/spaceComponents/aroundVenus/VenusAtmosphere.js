import React from "react";

const VenusArmosphere = () => {
  return (
    <mesh>
      <fog attach="fog" args={["black", 1, 15]} />
    </mesh>
  );
};

export default VenusArmosphere;
