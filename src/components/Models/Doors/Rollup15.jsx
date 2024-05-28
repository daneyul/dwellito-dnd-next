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

const Rollup15 = React.memo(({ component, onBoundingBoxChange }) => {
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

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[10, 10, 10]}
      position={calcPosition(selectedElevation, distanceObject, elevationData, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer, ELEVATION_NAMES)}
      rotation={rotation}
    >
      <group
        position={[3.84, 2.02, -0.03]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              `SM_RollUp_Door_15x74_1`
            ].geometry
          }
          material={materials.Metal_01}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              `SM_RollUp_Door_15x74_2`
            ].geometry
          }
          material={materials.Metal_01}
          scale={0.01}
        />
      </group>
    </group>
  );
});

export default Rollup15;
