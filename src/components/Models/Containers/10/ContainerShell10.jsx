import { useGLTF } from "@react-three/drei";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { useContext, useRef } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { PageDataContext } from "@/components/Content/Content";

export default function ContainerShell10() {
  const { nodes, materials } = useGLTF(
    "/models/container/10/container-shell.glb"
  );
  const { INTERIOR_OPTIONS, DIMENSIONS } = useContext(Library2dDataContext);
  const { color, interior, selectedContainer } = useContext(PageDataContext);
  const { materials: exteriorMaterials } = useGLTF(
    `/models/materials/${color.material}.glb`
  );

  const exteriorPaint = exteriorMaterials[color.obj];
  const ref = useRef();

  const adjustForX = () => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2)
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2)
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2)
    }
  }
  const adjustForY = () => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2
    }
  }

  const Plywood = () => {
    if (interior === INTERIOR_OPTIONS[0]) {
      return (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["10FT_Blank_PlywoodWall_RearTop_002"].geometry}
            material={materials.Plywood_Texture_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["10FT_Blank_PlywoodWall_RearTop_002_1"].geometry}
            material={materials["Black_Vinyl.001"]}
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
            geometry={nodes["10FT_Blank_DryWall_Front_002"].geometry}
            material={materials["Black_Paint_01.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["10FT_Blank_DryWall_Left_002"].geometry}
            material={materials["Black_Paint_01.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["10FT_Blank_DryWall_RearTop_002"].geometry}
            material={materials.White_Drywall_Wall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["10FT_Blank_DryWall_RearTop_002_1"].geometry}
            material={materials["Black_Rubber_01.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["10FT_Blank_DryWall_Right_002"].geometry}
            material={materials["Black_Paint_01.001"]}
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
          geometry={nodes["10FT_Blank_LED_Light_Fixture_001"].geometry}
          material={materials["White_Mtl.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["10FT_Blank_LED_Light_Fixture_001_1"].geometry}
          material={materials["Emissive_Light.001"]}
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
          geometry={nodes["10FT_Interior_Blank_Floor_001"].geometry}
          material={materials["Echo.001"]}
        />
      </>
    );
  };

  const containerMesh = (
    <group
      dispose={null}
      scale={[10, 10, 10]}
      position={[adjustForX(), 0, adjustForY()]}
      ref={ref}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["10FT_Container_Exterior_Blank_RearTop_001"].geometry}
        material={exteriorPaint}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["10FT_Container_Exterior_Blank_Bottom_001"].geometry}
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

useGLTF.preload("/models/container/10/container-shell.glb");
