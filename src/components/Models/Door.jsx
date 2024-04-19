import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import {
  SCALE_FACTOR_FOR_CALCULATIONS,
  CANVAS_SCALE_FACTOR,
} from "@/utils/3D/library";
import { calcRotation } from "@/utils/3D/utils";
import { checkDistance } from "@/utils/2D/utils";

function Door({ component }) {
  const obj = useLoader(OBJLoader, `/models/${component.model}`);
  const material = useMemo(() => new MeshStandardMaterial({
    envMapIntensity: 0.25,
    color: "white",
  }), []);

  useMemo(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
        child.castShadow = true;
      }
    });
  }, [obj, material]);

  const selectedElevation = component.elevation[0];

  const distanceObject = checkDistance({
    component,
    selectedElevation,
  });

  const xPosition = distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS;
  const yPosition = 0;
  const zPosition = (parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;

  const position = [xPosition, zPosition, yPosition];
  const rotation = [0, calcRotation(selectedElevation), 0];

  return (
    <primitive
      key={component.id}
      object={obj.clone()}
      rotation={rotation}
      scale={CANVAS_SCALE_FACTOR}
      position={position}
      material={material}
    />
  );
}

export default Door;
