import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import { CANVAS_SCALE_FACTOR } from "@/utils/3dLibrary";
import BoundingBox from "./BoundingBox";

export default function ShippingContainer() {
  const ref = useRef();
  const obj = useLoader(OBJLoader, "/models/container.obj");

  // Create a white standard material with some roughness
  const material = new MeshStandardMaterial({
    envMapIntensity: 0.25,
    color: "white",
  });

  obj.traverse((child) => {
    obj.castShadow = true;
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
    }
  });

  return (
    <BoundingBox>
      <primitive
        ref={ref}
        object={obj}
        scale={CANVAS_SCALE_FACTOR}
        position={[0, 0, 0]}
        material={material}
      />
    </BoundingBox>
  );
}
