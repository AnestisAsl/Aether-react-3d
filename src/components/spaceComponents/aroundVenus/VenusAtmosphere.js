import React, { Component } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";

const VenusArmosphere = () => {
  return (
    <mesh>
      <fog attach="fog" args={["black", 1, 15]} />
    </mesh>
  );
};

export default VenusArmosphere;
