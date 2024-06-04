import { useGLTF } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { PageDataContext } from "@/components/Content/Content";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";

export default function ContainerShell20() {
  const { nodes, materials } = useGLTF(
    "/models/container/20/container-shell.glb"
  );
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const { INTERIOR_FINISH_OPTIONS } = useContext(Library3dDataContext);
  const { exteriorFinish, interiorFinish, selectedContainer, flooring } =
    useContext(PageDataContext);

  const { materials: exteriorMaterials } = useGLTF(
    `/models/materials/${exteriorFinish.fileName}.glb`
  );

  const exteriorPaint = exteriorMaterials[exteriorFinish.glbObject];

  const { materials: flooringMaterial } = useGLTF(
    `/models/materials/flooring/${flooring.fileName}.glb`
  );

  const ref = useRef();

  useEffect(() => {
    useGLTF.preload("/models/container/20/container-shell.glb");
    useGLTF.preload(`/models/materials/${exteriorFinish.fileName}.glb`);
  }, [exteriorFinish.fileName])

  const adjustForX = () => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  };
  const adjustForY = () => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  };

  const Plywood = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[0]) {
      return (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["20FT_Blank_PlywoodWall_RearTop_01"].geometry}
            material={materials["Plywood_Texture_01.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["20FT_Blank_PlywoodWall_RearTop_01_1"].geometry}
            material={materials["Black_Vinyl.002"]}
          />
        </>
      );
    }
  };

  const Drywall = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[1]) {
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
          geometry={nodes["20FT_Blank_LED_Light_Fixture_001"].geometry}
          material={materials["White_Mtl.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["20FT_Blank_LED_Light_Fixture_001_1"].geometry}
          material={materials["Emissive_Light.002"]}
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
          geometry={nodes["20FT_Interior_Blank_Floor_01001"].geometry}
          material={flooringMaterial[flooring.glbObject]}
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
        geometry={nodes["20FT_Container_Exterior_Blank_Bottom_01"].geometry}
        material={exteriorPaint}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["20FT_Container_Exterior_Blank_RearTop_01"].geometry}
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
