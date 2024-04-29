import { useGLTF } from "@react-three/drei";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { useEffect } from "react";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { checkDistance } from "@/utils/2D/utils";

const French = ({ component }) => {
  const { nodes, materials } = useGLTF(`/models/${component.model}`);
  const selectedElevation = component.elevation[0];
  const distanceObject = checkDistance({
    component,
    selectedElevation,
  });

  const rotation = [0, calcRotation(selectedElevation), 0];

  useEffect(() => {
    preloadGLTFModel(component.model);
  }, [component.model]);

  return (
    <group
      dispose={null}
      scale={[11.15, 11.15, 11.15]}
      position={calcPosition(selectedElevation, distanceObject)}
      rotation={rotation}
    >
      <group position={[0.81, 1.51, -0.007]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_1"
              ].geometry
            }
            material={materials.Blk_Handle_FD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_2"
              ].geometry
            }
            material={materials.Wht_FD}
          />
        </group>
      </group>
    </group>
  );
};

export default French;
