/* eslint-disable react/display-name */
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { checkDistance } from "@/utils/2D/utils";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { useGLTF } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import { Box3, Vector3 } from "three";

const Rollup = React.memo(({ component, onBoundingBoxChange }) => {
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
      scale={[10.4, 10.4, 10.4]}
      position={calcPosition(selectedElevation, distanceObject, SCALE_FACTOR_FOR_CALCULATIONS)}
      rotation={rotation}
    >
      <group
        position={[1.096, 1.83, -0.106]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "P215-1-02_Roll_Up_Door_Front_End_6ft8in_W_X_6ft4in_H_Ext_Int_Lock"
            ].geometry
          }
          material={materials.Aluminum_01}
          scale={0.01}
        />
      </group>
    </group>
  );
});

export default Rollup;
