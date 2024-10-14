import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box3, Vector3 } from 'three';
import { useGLTF } from '@react-three/drei';
import { checkDistance } from '@/utils/2D/sheds/utils';
import { calcPosition, calcRotation } from '@/utils/3D/sheds/utils';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const GenericShedDoor = ({
  component,
  onBoundingBoxChange,
  modelPath,
  customPosition,
  customRotation,
  customScale
}) => {
  const { nodes, materials } = useGLTF(modelPath);
  const { selectedComponents, selectedShed, scaleFactor } =
    useContext(ShedDataContext);
  const selectedElevation = component.elevation[0];
  const [width, setWidth] = useState(0);
  const distanceObject = checkDistance({
    component,
    selectedElevation,
    scaleFactor,
  });
  const ref = useRef();

  const rotation = useMemo(
    () => [0, calcRotation(selectedElevation, selectedShed), 0],
    [selectedElevation]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.updateWorldMatrix(true);
      const bbox = new Box3().setFromObject(ref.current);
      const size = new Vector3();
      const center = new Vector3();
      bbox.getSize(size);
      bbox.getCenter(center);

      setWidth(size.x);
      onBoundingBoxChange({ size, center, selectedElevation });
    }
  }, [selectedComponents, ref.current]);

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

  return (
    <group
      ref={ref}
      dispose={null}
      position={calcPosition({
        elevation: selectedElevation,
        distanceObject,
        SCALE_FACTOR_FOR_CALCULATIONS: 5,
        selectedBase: selectedShed,
        width,
      })}
      rotation={rotation}
    >
      <group
        position={customPosition}
        rotation={customRotation}
        scale={customScale}
      >
        <group>
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

export default GenericShedDoor;
