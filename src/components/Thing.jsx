import { useRef } from "react";

export default function Thing({ position }) {
  const ref = useRef();
  return (
    <mesh
      ref={ref}
      position={position}
      >
      <boxGeometry attach="geometry" args={[1, 2, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}