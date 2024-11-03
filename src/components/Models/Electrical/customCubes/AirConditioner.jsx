/* eslint-disable react-hooks/rules-of-hooks */
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { COMPONENT_NAMES, CONTAINER_SIZE_10, CONTAINER_SIZE_20, CONTAINER_SIZE_40 } from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import { useGLTF } from '@react-three/drei';
import { useContext } from 'react';

const CustomCubesAirConditioner = () => {
  const { containerSize, slug, selectedComponents, supplier } =
    useContext(ContainerDataContext);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.AIR_CONDITIONER
    )
  ) {
    return null;
  }

  const { nodes, materials } = useGLTF(
    `/models/${supplier}/electrical/${containerSize()}/airconditioner.glb`
  );

  const position = () => {
    let x = 0;
    let y = 2.7;
    let z = 0;

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

  return (
    <group dispose={null} scale={10} position={position()}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['P203-1-101_-_6K_BTU_Air_Conditioner_v02'].geometry}
        material={materials.White_PVC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['P203-1-101_-_6K_BTU_Air_Conditioner_v02_1'].geometry}
        material={materials.Inside_Color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['P203-1-101_-_6K_BTU_Air_Conditioner_v02_2'].geometry}
        material={materials.Black_PVC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes['P203-1-101_-_6K_BTU_Air_Conditioner_Assembly_v02'].geometry
        }
        material={materials.Zinc}
      />
    </group>
  );
};

export default CustomCubesAirConditioner;
