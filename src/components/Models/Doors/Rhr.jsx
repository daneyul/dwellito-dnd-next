/* eslint-disable react/display-name */
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { checkDistance } from "@/utils/2D/utils";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { useGLTF } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import { Box3, Vector3 } from "three";

const Rhr = React.memo(({ component, onBoundingBoxChange }) => {
  const { nodes, materials } = useGLTF(`/models/doors/${component.model}.glb`);
  const { elevationData, ELEVATION_NAMES, DIMENSIONS } = useContext(Library2dDataContext);
  const { SCALE_FACTOR_FOR_CALCULATIONS } = useContext(Library3dDataContext);
  const selectedElevation = component.elevation[0];
  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    ELEVATION_NAMES
  });
  const ref = useRef();

  const rotation = useMemo(
    () => [0, calcRotation(selectedElevation, elevationData), 0],
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
  }, [ref.current]);

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[10, 10, 10]}
      position={calcPosition(selectedElevation, distanceObject, SCALE_FACTOR_FOR_CALCULATIONS)}
      rotation={rotation}
    >
      <group position={[0.458, 1.53, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                `${component.model}`
              ].geometry
            }
            material={materials.Blk_Handle_PD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                `${component.model}_1`
              ].geometry
            }
            material={materials.Blk_PD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                `${component.model}_2`
              ].geometry
            }
            material={materials.Wht_PD}
          />
        </group>
      </group>
    </group>
  );
});

export default Rhr;
