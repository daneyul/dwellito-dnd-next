import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";

export default function ShippingContainer() {
  const ref = useRef();
  const obj = useLoader(OBJLoader, "/models/container.obj");

  // Create a white standard material with some roughness
  const material = new MeshStandardMaterial({
    envMapIntensity: 0.25,
    color: "white"
  });

  obj.traverse((child) => {
    obj.castShadow = true;
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
    }
  });

  return (
    <primitive
      ref={ref}
      object={obj}
      scale={0.015}
      position={[0, 0, 0]}
      material={material}
    />
  );
}
