import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import { CANVAS_SCALE_FACTOR } from "@/utils/3D/library";

export default function ShippingContainer() {
  const ref = useRef();
  const obj = useLoader(OBJLoader, "/models/container.obj");

  const material = new MeshStandardMaterial({
    color: 'white',
    roughness: 0.8,
    envMapIntensity: 1,
    emissive: '#000000',
    metalness: 0.15
    // flatShading: true
  });

  obj.traverse((child) => {
    obj.castShadow = true;
    obj.receiveShadow = true;
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
    }
  });

  return (
    <primitive
      ref={ref}
      object={obj}
      scale={CANVAS_SCALE_FACTOR}
      position={[0, 0, 0]}
      material={material}
    />
  );
}
