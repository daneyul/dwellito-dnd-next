import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { useContext, useRef } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

export default function ContainerExterior({ exteriorPaint, interior }) {
  const { nodes, materials } = useGLTF(
    "/models/container/20/container-shell.glb"
  );
  const { INTERIOR_OPTIONS } = useContext(Library2dDataContext);
  const ref = useRef();

  const Plywood = () => {
    if (interior === INTERIOR_OPTIONS[0]) {
      return (
        <>
          <mesh
        castShadow
        receiveShadow
        geometry={nodes['20FT_Blank_PlywoodWall_RearTop_01'].geometry}
        material={materials['Plywood_Texture_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['20FT_Blank_PlywoodWall_RearTop_01_1'].geometry}
        material={materials['Black_Vinyl.002']}
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
            geometry={nodes["20FT_Blank_DryWall_Front_01"].geometry}
            material={materials["Black_Paint_01.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["20FT_Blank_DryWall_Right_01"].geometry}
            material={materials["Black_Paint_01.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["20FT_Blank_DryWall_Left_01"].geometry}
            material={materials["Black_Paint_01.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["20FT_Blank_DryWall_RearTop_01"].geometry}
            material={materials["White_Drywall_Wall.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["20FT_Blank_DryWall_RearTop_01_1"].geometry}
            material={materials["Black_Rubber_01.002"]}
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
        geometry={nodes['20FT_Blank_LED_Light_Fixture_001'].geometry}
        material={materials['White_Mtl.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['20FT_Blank_LED_Light_Fixture_001_1'].geometry}
        material={materials['Emissive_Light.002']}
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
        geometry={nodes['20FT_Interior_Blank_Floor_01001'].geometry}
        material={materials['Timber.001']}
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
        geometry={nodes['20FT_Container_Exterior_Blank_Bottom_01'].geometry}
        material={exteriorPaint}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['20FT_Container_Exterior_Blank_RearTop_01'].geometry}
        material={exteriorPaint}
      />
      <Lighting />
      <Flooring />
      <Plywood />
      <Drywall />
    </group>
  );

  return containerMesh;
}

useGLTF.preload("/models/container-shell.glb");
