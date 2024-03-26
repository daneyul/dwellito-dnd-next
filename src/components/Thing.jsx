import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function Thing() {
  const ref = useRef();
  const obj = useLoader(OBJLoader, "/models/model.obj");
  return <primitive ref={ref} object={obj} scale={0.4} position={[1, 2, 3]} />;
}
