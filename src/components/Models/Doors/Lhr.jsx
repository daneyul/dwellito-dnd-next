/* eslint-disable react/display-name */
import { checkDistance } from "@/utils/2D/utils";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { Box, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Box3, Vector3 } from "three";

const Lhr = React.memo(({ component, onBoundingBox }) => {
  const { nodes, materials } = useGLTF(`/models/${component.model}`);
  const selectedElevation = component.elevation[0];
  const distanceObject = checkDistance({
    component,
    selectedElevation,
  });

  const rotation = [0, calcRotation(selectedElevation), 0];
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const bbox = new Box3().setFromObject(ref.current);
      const size = new Vector3();
      const center = new Vector3();
      bbox.getSize(size);
      bbox.getCenter(center);
      onBoundingBox({ size, center });
    }
  }, [ref.current]);

  useEffect(() => {
    preloadGLTFModel(component.model);
  }, [component.model]);

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[10, 10, 10]}
      position={calcPosition(selectedElevation, distanceObject)}
      rotation={rotation}
    >
      <group position={[0.458, 1.53, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P202-1-102_Personnel_Door_w_Hardware_and_Lock_Box_3ft_x_6ft8in_LHR_1"
              ].geometry
            }
            material={materials.Blk_Handle_PD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P202-1-102_Personnel_Door_w_Hardware_and_Lock_Box_3ft_x_6ft8in_LHR_2"
              ].geometry
            }
            material={materials.Blk_PD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P202-1-102_Personnel_Door_w_Hardware_and_Lock_Box_3ft_x_6ft8in_LHR_3"
              ].geometry
            }
            material={materials.Wht_PD}
          />
        </group>
      </group>
    </group>
  );
});

export default Lhr;
