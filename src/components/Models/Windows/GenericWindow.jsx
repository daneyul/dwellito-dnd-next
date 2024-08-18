/* eslint-disable react/display-name */
import { PageDataContext } from '@/components/Content/Content';
import { checkDistance } from '@/utils/2D/utils';
import { calcPosition, calcRotation } from '@/utils/3D/utils';
import { useGLTF } from '@react-three/drei';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box3, Vector3 } from 'three';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ELEVATION_NAMES } from '@/utils/constants/names/names';

const GenericWindow =
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
    const [width, setWidth] = useState(0);
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
        // Recalculate the bounding box
        const bbox = new Box3().setFromObject(ref.current);
        const size = new Vector3();
        const center = new Vector3();
        bbox.getSize(size);
        bbox.getCenter(center);
    
        // Update state and notify about bounding box change
        setWidth(size.x);
        onBoundingBoxChange({
          size,
          center: new Vector3(center.x, center.y, center.z),
          selectedElevation,
        });
      }
    }, [selectedComponents, selectedElevation.name, ref.current]);
    

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
          DIMENSIONS.SCALE_FACTOR_FOR_CALCULATIONS,
          selectedContainer,
          width
        )}
        rotation={rotation}
      >
        <group position={customPosition} rotation={customRotation}>
          <group scale={0.01}>
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

export default GenericWindow;
