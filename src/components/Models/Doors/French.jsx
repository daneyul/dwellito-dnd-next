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

const French = React.memo(({ component, onBoundingBoxChange }) => {
  const { elevationData, ELEVATION_NAMES, DIMENSIONS } = useContext(Library2dDataContext);
  const { selectedComponents } = useContext(PageDataContext);
  const { SCALE_FACTOR_FOR_CALCULATIONS } = useContext(Library3dDataContext);
  const { nodes, materials } = useGLTF(`/models/doors/${component.model}.glb`);
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
  }, [selectedComponents]);

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[10, 10, 10]}
      position={calcPosition(selectedElevation, distanceObject, elevationData, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS)}
      rotation={rotation}
    >
      <group position={[0.81, 1.83, -0.007]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_1"
              ].geometry
            }
            material={materials.Blk_Handle_FD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_2"
              ].geometry
            }
            material={materials.Wht_FD}
          />
        </group>
      </group>
    </group>
  );
});

export default French;
