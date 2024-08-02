/* eslint-disable react/display-name */
import { PageDataContext } from '@/components/Content/Content';
import { checkDistance } from '@/utils/2D/utils';
import { calcPosition, calcRotation } from '@/utils/3D/utils';
import { useGLTF } from '@react-three/drei';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Box3, Vector3 } from 'three';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { elevationData } from '@/utils/constants/elevationData';

const GenericVent = React.memo(
  ({
    component,
    onBoundingBoxChange,
    modelPath,
    customPosition,
    customRotation,
  }) => {
    const { nodes, materials } = useGLTF(modelPath);
    const { selectedComponents, selectedContainer, scaleFactor } =
      useContext(PageDataContext);
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
        calcRotation(selectedElevation, selectedContainer),
        0,
      ],
      [selectedElevation]
    );

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

    return (
      <group
        ref={ref}
        dispose={null}
        scale={[10, 10, 10]}
        position={calcPosition(
          selectedElevation,
          distanceObject,
          DIMENSIONS.SCALE_FACTOR_FOR_CALCULATIONS,
          selectedContainer
        )}
        rotation={rotation}
      >
        <group position={customPosition} rotation={customRotation}>
          {Object.keys(nodes).map((nodeKey) => {
            const node = nodes[nodeKey];
            if (node.isMesh) {
              const material = materials[node.material.name];
              return (
                <mesh
                  key={nodeKey}
                  castShadow
                  receiveShadow
                  geometry={node.geometry}
                  material={material || materials.default}
                  scale={0.01}
                />
              );
            }
            return null;
          })}
        </group>
      </group>
    );
  }
);

export default GenericVent;
