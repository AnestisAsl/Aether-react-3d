import React from "react";
import { animated } from "@react-spring/three";

const RingsOfSaturn = () => {
  return (
    <>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"RingD"}>
        <torusGeometry attach="geometry" args={[4, 0.0075, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"green"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"RingC"}>
        <torusGeometry attach="geometry" args={[5, 0.0175, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"blue"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"RingC"}>
        <torusGeometry attach="geometry" args={[6, 0.025, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"red"} />
      </animated.mesh>
      <animated.mesh
        position={[-1, 2, 0]}
        rotation-x={30}
        name={"CassiniDivision"}
      >
        <torusGeometry attach="geometry" args={[6.5, 0.0047, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"black"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"RingA"}>
        <torusGeometry attach="geometry" args={[6.7, 0.014, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"yellow"} />
      </animated.mesh>
      <animated.mesh
        position={[-1, 2, 0]}
        rotation-x={30}
        name={"rocheDivision"}
      >
        <torusGeometry attach="geometry" args={[6.8, 0.0026, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"hotpink"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"RingF"}>
        <torusGeometry attach="geometry" args={[7, 0.0006, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"black"} />
      </animated.mesh>
      <animated.mesh
        position={[-1, 2, 0]}
        rotation-x={30}
        name={"EpimetheusRing"}
      >
        <torusGeometry attach="geometry" args={[7.2, 0.005, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"orange"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"RingG"}>
        <torusGeometry attach="geometry" args={[7.3, 0.009, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"lightblue"} />
      </animated.mesh>
      <animated.mesh
        position={[-1, 2, 0]}
        rotation-x={30}
        name={"MethoneRingArc"}
      >
        <torusGeometry attach="geometry" args={[7.4, 0.009, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"brown"} />
      </animated.mesh>
      <animated.mesh
        position={[-1, 2, 0]}
        rotation-x={30}
        name={"AntheRingArc"}
      >
        <torusGeometry attach="geometry" args={[7.5, 0.009, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"aquamarine"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"PalleneRing"}>
        <torusGeometry attach="geometry" args={[7.6, 0.0025, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"black"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"RingE"}>
        <torusGeometry attach="geometry" args={[7.7, 0.03, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"red"} />
      </animated.mesh>
      <animated.mesh position={[-1, 2, 0]} rotation-x={30} name={"PhobeneRing"}>
        <torusGeometry attach="geometry" args={[7.8, 0.01, 64, 64]} />
        <animated.meshStandardMaterial attach="material" color={"yellow"} />
      </animated.mesh>
    </>
  );
};

export default RingsOfSaturn;
