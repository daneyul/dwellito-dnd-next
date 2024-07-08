import { PageDataContext } from '@/components/Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import {
  COMPONENT_NAMES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
} from '@/utils/constants/names';
import { useGLTF } from '@react-three/drei';
import { useContext, useEffect, useRef } from 'react';
import { Box3, Vector3 } from 'three';

const ExhaustFan = ({ onBoundingBoxChange }) => {
  const { containerSize, slug, selectedComponents } =
    useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const groupRef = useRef();

  const { nodes, materials } = useGLTF(
    `/models/electrical/${containerSize()}/fan.glb`
  );

  const isSelected = selectedComponents.some(
    (component) => component.name === COMPONENT_NAMES.EXHAUST_FAN
  );

  const position = () => {
    let x = -3.1;
    let y = 0;
    let z = -1.2;

    if (slug === CONTAINER_10_SLUG) {
      x += -DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2;
      y += DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_20_SLUG) {
      x += -DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2;
      y += DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_40_SLUG) {
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

  if (!isSelected) {
    return null;
  }

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

useGLTF.preload('/models/electrical/10/fan.glb');
useGLTF.preload('/models/electrical/20/fan.glb');
useGLTF.preload('/models/electrical/40/fan.glb');