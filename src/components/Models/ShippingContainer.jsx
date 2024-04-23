import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import { CANVAS_SCALE_FACTOR } from "@/utils/3D/library";
import { adjustForX, adjustForY } from "@/utils/3D/utils";

export default function ShippingContainer() {
  const ref = useRef();
  const obj = useLoader(OBJLoader, "/models/container.obj");
  // const { materials } = useGLTF('/models/test.glb')
  // console.log(materials)

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
      position={[adjustForX, 0, adjustForY]}
      material={material}
    />
  );
}
