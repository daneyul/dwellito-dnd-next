/* eslint-disable react-hooks/rules-of-hooks */
import { checkDistance } from '@/utils/2D/containers/utils';
import { Box3, Vector3 } from 'three';
import { calcPosition, calcRotation } from '@/utils/3D/containers/utils';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const SecurityFloodLight = ({ component }) => {
  const {
    supplier,
    selectedComponents,
    selectedContainer,
    scaleFactor
  } = useContext(ContainerDataContext);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.SECURITY_FLOOD_LIGHT
    )
  ) {
    return null;
  }

  const selectedElevation = component.elevation[0];

  const { nodes, materials } = useGLTF(
    `/models/${supplier}/electrical/security-floodlight.glb`
  );

  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    selectedContainer,
    scaleFactor,
  });

  const [width, setWidth] = useState(0);
  const ref = useRef();

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

      setWidth(size.x);
    }
  }, [ref.current]);

  const position = calcPosition({
    elevation:selectedElevation,
    distanceObject,
    SCALE_FACTOR_FOR_CALCULATIONS: DIMENSIONS.SCALE_FACTOR_FOR_CALCULATIONS,
    selectedBase: selectedContainer,
    width
  });

  const rotation = useMemo(
    () => [0, calcRotation(selectedElevation, selectedContainer), 0],
    [selectedElevation]
  );

  return (
    <group
        ref={ref}
        dispose={null}
        position={position}
        rotation={rotation}
      >
        <group position={[2.6, 26.9, -0.15]} rotation={[Math.PI/2, Math.PI, 0]} scale={0.25}>
          <group>
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

export default SecurityFloodLight;
