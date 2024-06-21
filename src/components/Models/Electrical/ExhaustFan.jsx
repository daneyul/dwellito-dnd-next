import { PageDataContext } from '@/components/Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import {
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
} from '@/utils/constants';
import { useGLTF } from '@react-three/drei';
import { useContext, useEffect, useRef } from 'react';
import { Box3, Vector3 } from 'three';

const ExhaustFan = ({ onBoundingBoxChange }) => {
  const { containerSize, slug } = useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const groupRef = useRef();

  const { nodes, materials } = useGLTF(
    `/models/electrical/${containerSize()}/fan.glb`
  );

  const position = () => {
    let x = 0;
    let y = 0;
    let z = 0;

    if (slug === CONTAINER_10_SLUG) {
      x = -DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2;
      y = DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_20_SLUG) {
      x = -DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2;
      y = DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_40_SLUG) {
      x = -DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2;
      y = DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
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
  }, [onBoundingBoxChange]);

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
