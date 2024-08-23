import { PageDataContext } from '@/components/Content/Content';
import {
  COMPONENT_NAMES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40
} from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import { useContext } from 'react';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';

const RoofVent = () => {
  const { containerHeightIsStandard, slug, selectedComponents, supplier } =
    useContext(PageDataContext);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.ROOF_VENT
    )
  ) {
    return null;
  }

  const fileName = containerHeightIsStandard
    ? 'roofvent-st.glb'
    : 'roofvent-hc.glb';

  const { nodes, materials } = useGLTF(`/models/${supplier}/electrical/${fileName}`);

  const position = () => {
    let x = 0;
    let y = 0;
    let z = 0;

    if (slug === CONTAINER_SIZE_10) {
      x = -DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2;
      y = DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_SIZE_20) {
      x = -DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2;
      y = DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (slug === CONTAINER_SIZE_40) {
      x = -DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2;
      y = DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }

    return [x, z, y];
  };

  return (
    <group dispose={null} scale={10} position={position()}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['P203-1-309_-_Vent_Roof_Whirly_Bird'].geometry}
        material={materials.Black_Metal}
      />
    </group>
  );
};

export default RoofVent;
