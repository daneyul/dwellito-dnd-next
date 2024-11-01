/* eslint-disable react/display-name */
import { checkDistance } from '@/utils/2D/containers/utils';
import { calcPosition, calcRotation } from '@/utils/3D/containers/utils';
import { useGLTF } from '@react-three/drei';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box3, Vector3 } from 'three';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import { ELEVATION_NAMES } from '@/utils/constants/names/names';

const GenericContainerWindow = ({
  component,
  onBoundingBoxChange,
  modelPath,
  customPosition,
  customBackPosition,
  customRotation,
  customScale,
}) => {
  const { nodes, materials } = useGLTF(modelPath);
  const { selectedContainer, scaleFactor } =
    useContext(ContainerDataContext);
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
    () => [0, calcRotation(selectedElevation, selectedContainer), 0],
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
  }, [component.position,ref.current]);

  useEffect(() => {
    if (materials.Glass) {
      materials.Glass.transparent = true;
      materials.Glass.opacity = 0.6;
      materials.Glass.roughness = 0.1;
      materials.Glass.metalness = 0.0;
    } else if (materials['Frosted Clear Glass']) {
      materials['Frosted Clear Glass'].transparent = true;
      materials['Frosted Clear Glass'].opacity = 0.6;
      materials['Frosted Clear Glass'].roughness = 0.1;
      materials['Frosted Clear Glass'].metalness = 0.0;
    }
  }, [materials]);

  const isBackElevation = selectedElevation.name === ELEVATION_NAMES.BACK;

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[10, 10, 10]}
      position={calcPosition({
        elevation: selectedElevation,
        distanceObject,
        SCALE_FACTOR_FOR_CALCULATIONS: DIMENSIONS.SCALE_FACTOR_FOR_CALCULATIONS,
        selectedBase: selectedContainer,
        width,
      })}
      rotation={rotation}
    >
      <group
        position={isBackElevation ? customBackPosition : customPosition}
        rotation={customRotation}
        scale={customScale}
      >
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
};

export default GenericContainerWindow;
