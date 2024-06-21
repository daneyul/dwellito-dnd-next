import { PageDataContext } from "@/components/Content/Content";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { CONTAINER_10_SLUG, CONTAINER_20_SLUG, CONTAINER_40_SLUG } from "@/utils/constants";
import { useGLTF } from "@react-three/drei";
import { useContext } from "react";

const Amp = () => {
  const { containerSize, slug } = useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);

  const { nodes, materials } = useGLTF(`/models/electrical/${containerSize()}/amp.glb`);
  
  const position = () => {
    let x = 0;
    let y = 0;
    let z = 0;

    if (slug === CONTAINER_10_SLUG) {
      x = -DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2
      y = DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2
    } else if (slug === CONTAINER_20_SLUG) {
      x = -DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2
      y = DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2
    } else if (slug === CONTAINER_40_SLUG) {
      x = -DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2
      y = DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2
    }

    return [x, z, y];
  }

  return (
    <group dispose={null} scale={10} position={position()} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['P601-1-102_-_100amp_Panel_with_Exterior_JB_Connection'].geometry}
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
  )
}

export default Amp;