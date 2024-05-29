/* eslint-disable react/display-name */
import { PageDataContext } from "@/components/Content/Content";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { checkDistance } from "@/utils/2D/utils";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { useGLTF } from "@react-three/drei";
import React, { useContext, useEffect, useMemo, useRef } from "react";
import { Box3, Vector3 } from "three";

const GenericWindow = React.memo(({ component, onBoundingBoxChange, modelPath, geometryNodes, materialNodes, customPosition, customRotation, customScale }) => {
  const { nodes, materials } = useGLTF(modelPath);
  const { selectedComponents, selectedContainer } = useContext(PageDataContext);
  const { elevationData, ELEVATION_NAMES, DIMENSIONS, SCALE_FACTORS } = useContext(Library2dDataContext);
  const { SCALE_FACTOR_FOR_CALCULATIONS } = useContext(Library3dDataContext);
  const selectedElevation = component.elevation[0];
  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    ELEVATION_NAMES,
    selectedContainer,
    SCALE_FACTORS
  });
  const ref = useRef();

  const rotation = useMemo(
    () => [0, calcRotation(selectedElevation, elevationData, selectedContainer, ELEVATION_NAMES), 0],
    [selectedElevation, elevationData]
  );

  useEffect(() => {
    preloadGLTFModel(`windows/${component.model}`);
  }, [component.model]);

  useEffect(() => {
    if (ref.current) {
      const bbox = new Box3().setFromObject(ref.current);
      const size = new Vector3();
      const center = new Vector3();
      bbox.getSize(size);
      bbox.getCenter(center);
      onBoundingBoxChange({ size, center });
    }
  }, [selectedComponents]);

  useEffect(() => {
    if (materials.Material__104) {
      materials.Material__104.transparent = true;
      materials.Material__104.opacity = 0.6; // Adjust opacity as needed
      materials.Material__104.roughness = 0.1; // Glass is generally smooth
      materials.Material__104.metalness = 0.0; // Glass isn't metallic
    }
  }, [materials]);

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[10, 10, 10]}
      position={calcPosition(selectedElevation, distanceObject, elevationData, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer, ELEVATION_NAMES)}
      rotation={rotation}
    >
      <group position={customPosition} rotation={customRotation}>
        <group scale={0.01}>
          {geometryNodes.map((node, index) => (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={nodes[node].geometry}
              material={materials[materialNodes[index]]}
            />
          ))}
        </group>
      </group>
    </group>
  );
});

export default GenericWindow;
