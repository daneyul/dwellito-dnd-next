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

const Sliding6 = React.memo(({ component, onBoundingBoxChange }) => {
  const { nodes, materials } = useGLTF(`/models/doors/${component.model}.glb`);
  const { selectedComponents, selectedContainer } = useContext(PageDataContext);
  const { elevationData, ELEVATION_NAMES, DIMENSIONS } = useContext(Library2dDataContext);
  const { SCALE_FACTOR_FOR_CALCULATIONS } = useContext(Library3dDataContext);
  const selectedElevation = component.elevation[0];
  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    ELEVATION_NAMES,
    selectedContainer
  });
  const ref = useRef();

  const rotation = useMemo(
    () => [0, calcRotation(selectedElevation, elevationData, selectedContainer, ELEVATION_NAMES), 0],
    [selectedElevation, elevationData]
  );

  useEffect(() => {
    preloadGLTFModel(`doors/${component.model}`);
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
    if (materials.Glass) {
      materials.Glass.transparent = true;
      materials.Glass.opacity = 0.6; // Adjust opacity as needed
      materials.Glass.roughness = 0.1; // Glass is generally smooth
      materials.Glass.metalness = 0.0; // Glass isn't metallic
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
      <group position={[0.81, 1.83, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wide_Sliding_Glass_Door_6feet_1.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wide_Sliding_Glass_Door_6feet_2.geometry}
            material={materials.Metal_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wide_Sliding_Glass_Door_6feet_3.geometry}
            material={materials.Metal_02}
          />
        </group>
      </group>
    </group>
  );
});

export default Sliding6;
