import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { INTERIOR_OPTIONS } from "@/utils/3D/library";
import { useRef } from "react";

export default function ShippingContainer({ color, interior }) {
  const { nodes, materials } = useGLTF("/models/container/container.glb");
  const material = new MeshStandardMaterial({ color: color });
  const ref = useRef();

  const containerMesh = (
    <group
      dispose={null}
      scale={[10, 10, 10]}
      position={[adjustForX, 0, adjustForY]}
      ref={ref}
    >
      <group position={[1.157, 2.407, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_LED_DW_Light_Fixture_01_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_LED_DW_Light_Fixture_01_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group position={[3.031, 0.173, -1.192]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_PlywoodWall_RearTop_01_1.geometry}
            material={materials.Black_Vinyl}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_PlywoodWall_RearTop_01_2.geometry}
            material={materials.Plywood_Texture_01}
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
          geometry={nodes.Container_Exterior_Blank_RearTop_01.geometry}
          material={materials.White}
          scale={0.01}
        />
      </group>
      <group position={[1.157, 2.407, -1.214]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_LED_PW_Light_Fixture_01_1.geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_LED_PW_Light_Fixture_01_2.geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group position={[3.031, 0.173, -1.212]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Interior_Blank_Floor_01.geometry}
          material={materials.Echo}
          scale={0.01}
        />
      </group>
      <group
        position={[6.019, 1.138, -4.267]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container_Exterior_Blank_Left_01.geometry}
          material={materials.White}
          scale={0.01}
        />
      </group>
      <group
        position={[6.019, 1.138, -4.267]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container_Exterior_Blank_Right_01.geometry}
          material={materials.White}
          scale={0.01}
        />
      </group>
      <group
        position={[6.019, 1.138, -4.267]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container_Exterior_Blank_Bottom_01.geometry}
          material={materials.White}
          scale={0.01}
        />
      </group>
      <group
        position={[6.019, 1.138, -4.267]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container_Exterior_Blank_Front_01.geometry}
          material={materials.White}
          scale={0.01}
        />
      </group>
      <group position={[3.031, 0.173, -1.192]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_L01_PlywoodWall_Front_01.geometry}
          material={materials.Plywood_Texture_01}
          scale={0.01}
        />
      </group>
      <group position={[3.031, 0.173, -1.192]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_L01_PlywoodWall_Right_01.geometry}
          material={materials.Plywood_Texture_01}
          scale={0.01}
        />
      </group>
      <group position={[3.031, 0.173, -1.192]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_L01_PlywoodWall_Left_01.geometry}
          material={materials.Plywood_Texture_01}
          scale={0.01}
        />
      </group>
    </group>
  );

  return containerMesh;
}

useGLTF.preload("/models/container.glb");
