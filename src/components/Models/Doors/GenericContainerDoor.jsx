import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box3, Vector3 } from 'three';
import { useGLTF } from '@react-three/drei';
import { checkDistance } from '@/utils/2D/containers/utils';
import { calcPosition, calcRotation } from '@/utils/3D/containers/utils';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ELEVATION_NAMES } from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const GenericContainerDoor = ({
  component,
  onBoundingBoxChange,
  modelPath,
  customPosition,
  customBackPosition,
  customRotation,
  customScale,
  isHrDoor,
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
      // Ensure transformations are applied
      ref.current.updateMatrixWorld(true);
  
      // Recalculate bounding box after transformations are applied
      const bbox = new Box3().setFromObject(ref.current);
      const size = new Vector3();
      const center = new Vector3();
      bbox.getSize(size);
      bbox.getCenter(center);
  
      // Adjust width and center if necessary
      const adjustedWidth = isHrDoor && selectedElevation.name === ELEVATION_NAMES.LEFT 
        ? size.x - 0.7 
        : size.x;
  
      setWidth(adjustedWidth);
      onBoundingBoxChange({ size, center, selectedElevation });
    }
  }, [component.position, ref.current]);

  useEffect(() => {
    if (materials.Glass) {
      materials.Glass.transparent = true;
      materials.Glass.opacity = 0.6; // Adjust opacity as needed
      materials.Glass.roughness = 0.1; // Glass is generally smooth
      materials.Glass.metalness = 0.0; // Glass isn't metallic
    }
  }, [materials]);

  const meshKeys = Object.keys(nodes).filter(
    (nodeKey) => nodes[nodeKey].isMesh
  );

  const isBackElevation = selectedElevation.name === ELEVATION_NAMES.BACK;

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[10, 10, 10]}
      position={
        calcPosition({
          elevation: selectedElevation,
          distanceObject,
          SCALE_FACTOR_FOR_CALCULATIONS:DIMENSIONS.SCALE_FACTOR_FOR_CALCULATIONS,
          selectedBase: selectedContainer,
          width
        })
      }
      rotation={rotation}
    >
      <group
        position={isBackElevation ? customBackPosition : customPosition}
        rotation={customRotation}
        scale={customScale}
      >
        <group scale={0.01}>
          {meshKeys.map((nodeKey) => {
            const node = nodes[nodeKey];
            return (
              <mesh
                key={nodeKey}
                castShadow
                receiveShadow
                geometry={node.geometry}
                material={materials[node.material.name]}
              />
            );
          })}
        </group>
      </group>
    </group>
  );
};

export default GenericContainerDoor;
