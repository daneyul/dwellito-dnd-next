import { PageDataContext } from "@/components/Content/Content";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { CONTAINER_10_SLUG, CONTAINER_20_SLUG, CONTAINER_40_SLUG } from "@/utils/constants";
import { useGLTF } from "@react-three/drei";
import { useContext } from "react";

const AirConditioner = () => {
  const { containerSize, slug } = useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);

  const { nodes, materials } = useGLTF(`/models/electrical/${containerSize()}/airconditioner.glb`);
  
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
        geometry={nodes['P203-1-101_-_6K_BTU_Air_Conditioner_Assembly_v02'].geometry}
        material={materials.Zinc}
      />
    </group>
  )
}

export default AirConditioner;