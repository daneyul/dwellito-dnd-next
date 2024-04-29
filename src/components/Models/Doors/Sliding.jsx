import { checkDistance } from "@/utils/2D/utils";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Sliding = ({ component }) => {
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
      scale={[11.3, 11.3, 11.3]}
      position={calcPosition(selectedElevation, distanceObject)}
      rotation={rotation}
    >
      <group position={[0.81, 1.49, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["P202-1-304_6ft_Wide_Sliding_Glass_Door_White_Vinyl_1"]
                .geometry
            }
            material={materials.Black_Vinyl}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["P202-1-304_6ft_Wide_Sliding_Glass_Door_White_Vinyl_2"]
                .geometry
            }
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["P202-1-304_6ft_Wide_Sliding_Glass_Door_White_Vinyl_3"]
                .geometry
            }
            material={materials.White_Vinyl}
          />
        </group>
      </group>
    </group>
  );
};

export default Sliding;
