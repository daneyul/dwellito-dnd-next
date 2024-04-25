import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import { CANVAS_SCALE_FACTOR, SCALE_FACTOR_FOR_CALCULATIONS } from "@/utils/3D/library";
import { adjustForX, adjustForY } from "@/utils/3D/utils";

export default function ShippingContainer({ color }) {
  const { nodes, materials } = useGLTF('/models/container.glb')
  const material = new MeshStandardMaterial({ color: color });

  return (
    <group dispose={null} scale={[10, 10, 10]} position={[adjustForX, 0, adjustForY]}>
      <group position={[1.157, 2.407, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_DW_Light_Fixture_01_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_DW_Light_Fixture_01_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group position={[3.019, 2.407, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_DW_Light_Fixture_02_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_DW_Light_Fixture_02_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group position={[4.906, 2.407, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_DW_Light_Fixture_03_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_DW_Light_Fixture_03_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group position={[3.021, 0.173, -1.212]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_L01_Gasket_Drywall_01.geometry}
          material={materials.Black_Rubber_01}
          scale={0.01}
        />
      </group>
      <group position={[3.031, 0.173, -1.192]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_L01_PlywoodWall_001.geometry}
          material={materials.Plywood_Texture_01}
          scale={0.01}
        />
      </group>
      <group position={[3.001, 0.173, -1.212]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_L01_Gasket_PlywoodWalll_01.geometry}
          material={materials.Black_Vinyl}
          scale={0.01}
        />
      </group>
      <group position={[1.157, 2.434, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_PW_Light_Fixture_03_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_LED_PW_Light_Fixture_03_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group position={[3.019, 2.434, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Obj_SM_L01_LED_DW_Light_Fixture_01_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Obj_SM_L01_LED_DW_Light_Fixture_01_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group position={[3.031, 0.173, -1.212]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_DryWall_01_1.geometry}
            material={materials.Black_Paint_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_DryWall_01_2.geometry}
            material={materials.White_Drywall_Wall}
          />
        </group>
      </group>
      <group position={[4.916, 2.434, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Obj_SM_L01_LED_DW_Light_Fixture_02_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Obj_SM_L01_LED_DW_Light_Fixture_02_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group
        position={[6.019, 1.138, -4.267]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Exterior_Blank_01.geometry}
          material={material}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/container.glb')
