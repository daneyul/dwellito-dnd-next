import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { INTERIOR_OPTIONS } from "@/utils/3D/library";
import { useRef } from "react";

export default function ContainerExterior({ color, interior }) {
  const { nodes, materials } = useGLTF("/models/container/container-exterior.glb");
  const material = new MeshStandardMaterial({ color: color });
  const ref = useRef();

  const Plywood = () => {
    if (interior === INTERIOR_OPTIONS[0]) {
      return (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_PlywoodWall_RearTop_01.geometry}
            material={materials.Plywood_Texture_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_L01_PlywoodWall_RearTop_01_1.geometry}
            material={materials.Black_Vinyl}
          />
        </>
      );
    }
  };

  const Drywall = () => {
    if (interior === INTERIOR_OPTIONS[1]) {
      return (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Blank_DryWall_RearTop_01.geometry}
            material={materials.White_Drywall_Wall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Blank_DryWall_RearTop_01_1.geometry}
            material={materials.Black_Rubber_01}
          />
        </>
      );
    }
  };

  const Lighting = () => {
    return (
      <>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_LED_PW_Light_Fixture_01.geometry}
          material={materials.White_Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_LED_PW_Light_Fixture_01_1.geometry}
          material={materials.Emissive_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_LED_DW_Light_Fixture_01.geometry}
          material={materials.White_Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_LED_DW_Light_Fixture_01_1.geometry}
          material={materials.Emissive_Light}
        />
      </>
    );
  };

  const Flooring = () => {
    return (
      <>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container_Exterior_Blank_Bottom_01.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Interior_Blank_Floor_01.geometry}
          material={materials.Echo}
        />
      </>
    );
  };

  const containerMesh = (
    <group
      dispose={null}
      scale={[10, 10, 10]}
      position={[adjustForX, 0, adjustForY]}
      ref={ref}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Container_Exterior_Blank_RearTop_01.geometry}
        material={material}
      />
      <Lighting />
      <Flooring />
      <Plywood />
      <Drywall />
    </group>
  );

  return containerMesh;
}

useGLTF.preload("/models/container-exterior.glb");
