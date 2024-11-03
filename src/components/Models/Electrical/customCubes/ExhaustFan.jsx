/* eslint-disable react-hooks/rules-of-hooks */
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import {
  COMPONENT_NAMES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40
} from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import { useGLTF } from '@react-three/drei';
import { useContext, useEffect, useRef } from 'react';
import { Box3, Vector3 } from 'three';

const ExhaustFan = ({ onBoundingBoxChange }) => {
  const { containerSize, slug, selectedComponents, supplier } =
    useContext(ContainerDataContext);
    
  const isSelected = selectedComponents.some(
    (component) => component.name === COMPONENT_NAMES.EXHAUST_FAN
  );

  if (!isSelected) {
    return null;
  }

  const groupRef = useRef();

  const { nodes, materials } = useGLTF(
    `/models/${supplier}/electrical/${containerSize()}/fan.glb`
  );

  const position = () => {
    let x = -3.1;
    let y = 0;
    let z = -1.2;

    if (slug === CONTAINER_SIZE_10) {
      x += -DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2;
      y += DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_SIZE_20) {
      x += -DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2;
      y += DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_SIZE_40) {
      x += -DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2;
      y += DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }

    return [x, z, y];
  };

  useEffect(() => {
    if (groupRef.current) {
      const box = new Box3().setFromObject(groupRef.current);
      const size = new Vector3();
      box.getSize(size);
      const center = new Vector3();
      box.getCenter(center);
      onBoundingBoxChange({ size, center });
    }
  }, [onBoundingBoxChange, isSelected]);

  return (
    <group ref={groupRef} dispose={null} scale={10} position={position()}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['12in_Exhaust_Fan_with_Gravity_Damper'].geometry}
        material={materials['Zinc (4)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['12in_Exhaust_Fan_with_Gravity_Damper_1'].geometry}
        material={materials.Black_Material}
      />
    </group>
  );
};

export default ExhaustFan;
