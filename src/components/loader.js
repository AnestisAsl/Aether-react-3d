import { Text } from "@react-three/drei";

const Loader = () => {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <Text fontSize={2}>Loading...</Text>
    </group>
  );
};

export default Loader;
