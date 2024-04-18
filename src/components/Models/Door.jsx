import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import {
  CANVAS_SCALE_FACTOR,
  SCALE_FACTOR_FOR_CALCULATIONS,
} from "@/utils/3D/library";
import { checkDistance } from "@/utils/2D/utils";

export default function Door({ selectedComponent }) {
  const ref = useRef();
  const obj = useLoader(OBJLoader, `/models/${selectedComponent.model}`);
  const material = new MeshStandardMaterial({
    envMapIntensity: 0.25,
    color: "white",
  });

  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
    }
  });

  const distanceObject = checkDistance({
    component: selectedComponent,
    selectedElevation: selectedComponent.elevation[0],
  });

  let xPosition = distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS;
  let yPosition = 0;
  let zPosition = 8 / SCALE_FACTOR_FOR_CALCULATIONS;
  const position = [xPosition, zPosition, yPosition];

  console.log(
    checkDistance({
      component: selectedComponent,
      selectedElevation: selectedComponent.elevation[0],
    })
  );

  return (
    <primitive
      ref={ref}
      object={obj}
      scale={CANVAS_SCALE_FACTOR}
      position={position}
      material={material}
    />
  );
}
