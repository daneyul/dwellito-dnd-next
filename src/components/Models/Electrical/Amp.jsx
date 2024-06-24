import { PageDataContext } from '@/components/Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { electricalComponents } from '@/utils/constants/components/electrical';
import {
  COMPONENT_NAMES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
} from '@/utils/constants/names';
import { useGLTF } from '@react-three/drei';
import { useContext } from 'react';

const Amp = () => {
  const { containerSize, slug, selectedComponents } =
    useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);

  const { nodes, materials } = useGLTF(
    `/models/electrical/${containerSize()}/amp.glb`
  );

  const position = () => {
    let x = 0;
    let y = -2.7;
    let z = 0;

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

  if (
    !selectedComponents.some(
      (component) =>
        component.name === COMPONENT_NAMES.ELECTRICAL_PANEL_60_AMP ||
        component.name === COMPONENT_NAMES.ELECTRICAL_PANEL_100_AMP
    )
  ) {
    return null;
  }

  return (
    <group dispose={null} scale={10} position={position()}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes['P601-1-102_-_100amp_Panel_with_Exterior_JB_Connection']
            .geometry
        }
        material={materials.Zinc}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Outdoor_Junction_Box.geometry}
        material={materials['Zinc (3)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Outdoor_Junction_Box_1.geometry}
        material={materials['disjuntor_color (2)']}
      />
    </group>
  );
};

export default Amp;
