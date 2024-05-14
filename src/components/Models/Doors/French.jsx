/* eslint-disable react/display-name */
import { checkDistance } from "@/utils/2D/utils";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { useGLTF } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import { Box3, Vector3 } from "three";

const French = React.memo(({ component, onBoundingBoxChange }) => {
  const { nodes, materials } = useGLTF(`/models/${component.model}`);
  const selectedElevation = component.elevation[0];
  const distanceObject = checkDistance({
    component,
    selectedElevation,
  });
  const ref = useRef();

  const rotation = useMemo(
    () => [0, calcRotation(selectedElevation), 0],
    [selectedElevation]
  );

  useEffect(() => {
    preloadGLTFModel(component.model);
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
      scale={[11.15, 11.15, 11.15]}
      position={calcPosition(selectedElevation, distanceObject)}
      rotation={rotation}
    >
      <group position={[0.81, 1.51, -0.007]}>
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
