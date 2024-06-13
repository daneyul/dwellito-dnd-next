import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Box3, Vector3 } from 'three';
import { useGLTF } from '@react-three/drei';
import { PageDataContext } from '@/components/Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';
import { checkDistance } from '@/utils/2D/utils';
import { preloadGLTFModel } from '@/utils/3D/preloadGLTFModel';
import { calcPosition, calcRotation } from '@/utils/3D/utils';

const GenericDoor = React.memo(
  ({
    component,
    onBoundingBoxChange,
    modelPath,
    customPosition,
    customRotation,
    customScale,
    isRollup
  }) => {
    const { nodes, materials } = useGLTF(modelPath);
    const { selectedComponents, selectedContainer, scaleFactor } =
      useContext(PageDataContext);
    const { elevationData, DIMENSIONS } =
      useContext(Library2dDataContext);
    const { SCALE_FACTOR_FOR_CALCULATIONS } = useContext(Library3dDataContext);
    const selectedElevation = component.elevation[0];
    const distanceObject = checkDistance({
      component,
      selectedElevation,
      DIMENSIONS,
      selectedContainer,
      scaleFactor,
    });
    const ref = useRef();

    const rotation = useMemo(
      () => [
        0,
        calcRotation(selectedElevation, elevationData, selectedContainer),
        0,
      ],
      [selectedElevation, elevationData]
    );

    useEffect(() => {
      preloadGLTFModel(modelPath);
    }, [modelPath]);

    useEffect(() => {
      if (ref.current) {
        const bbox = new Box3().setFromObject(ref.current);
        const size = new Vector3();
        const center = new Vector3();
        bbox.getSize(size);
        bbox.getCenter(center);
        onBoundingBoxChange({ size, center, selectedElevation });
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
        position={calcPosition(
          selectedElevation,
          distanceObject,
          elevationData,
          SCALE_FACTOR_FOR_CALCULATIONS,
          DIMENSIONS,
          selectedContainer
        )}
        rotation={rotation}
      >
        <group
          position={customPosition}
          rotation={customRotation}
          scale={customScale}
        >
          <group scale={0.01}>
            {Object.keys(nodes).map((nodeKey) => {
              const node = nodes[nodeKey];
              if (node.isMesh) {
                return (
                  <mesh
                    key={nodeKey}
                    castShadow
                    receiveShadow
                    geometry={node.geometry}
                    material={materials[node.material.name]}
                  />
                );
              }
              return null;
            })}
          </group>
        </group>
      </group>
    );
  }
);

export default GenericDoor;
