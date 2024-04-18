import { useLoader } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import { CANVAS_SCALE_FACTOR } from "@/utils/3dLibrary";
import BoundingBox from "./BoundingBox";

export default function Door({ selectedObjects }) {
  const [dimensions, setDimensions] = useState({ x: 0, y: 0, z: 0 });
  const ref = useRef();
  const obj = useLoader(OBJLoader, `/models/SM_PDoor_LockBoxLHR_01.obj`);
  const material = new MeshStandardMaterial({
    envMapIntensity: 0.25,
    color: "white"
  });

  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
    }
  });

  const handleBoundingBoxDimensions = useCallback((dims) => {
    setDimensions(dims);
}, []);

  const position = [-50, 0, 0];

  return (
    <BoundingBox onReceiveDimensions={handleBoundingBoxDimensions}>
      <primitive
      ref={ref}
        object={obj}
        scale={CANVAS_SCALE_FACTOR}
        position={position}
        material={material}
      />
    </BoundingBox>
  );
}

