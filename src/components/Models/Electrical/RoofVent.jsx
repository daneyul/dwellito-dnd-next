import { PageDataContext } from '@/components/Content/Content';
import {
  COMPONENT_NAMES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
} from '@/utils/constants/names';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { useGLTF } from '@react-three/drei';
import { useContext } from 'react';

const RoofVent = () => {
  const { containerHeightIsStandard, slug, selectedComponents } =
    useContext(PageDataContext);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.ROOF_VENT
    )
  ) {
    return null;
  }

  const { DIMENSIONS } = useContext(Library2dDataContext);

  const fileName = containerHeightIsStandard
    ? 'roofvent-st.glb'
    : 'roofvent-hc.glb';

  const { nodes, materials } = useGLTF(`/models/electrical/${fileName}`);

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
