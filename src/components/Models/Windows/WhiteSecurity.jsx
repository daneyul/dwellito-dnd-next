import { checkDistance } from "@/utils/2D/utils";
import { preloadGLTFModel } from "@/utils/3D/preloadGLTFModel";
import { calcPosition, calcRotation } from "@/utils/3D/utils";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const WhiteSecurity = ({ component }) => {
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
      scale={[10, 10, 10]}
      position={calcPosition(selectedElevation, distanceObject)}
      rotation={rotation}
    >
      <group position={[0.65, 1.145, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P201-1-01_48in_w_x_36in_H_White_Window_w_HD_Steel_Frame_&_Hinged_Security_1"
              ].geometry
            }
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "P201-1-01_48in_w_x_36in_H_White_Window_w_HD_Steel_Frame_&_Hinged_Security_2"
              ].geometry
            }
            material={materials.White_Vinyl}
          />
        </group>
      </group>
    </group>
  );
};

export default WhiteSecurity;
