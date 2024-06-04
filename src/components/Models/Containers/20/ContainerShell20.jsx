import { useGLTF } from "@react-three/drei";
import { useContext, useEffect, useMemo, useRef } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { PageDataContext } from "@/components/Content/Content";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";

export default function ContainerShell20() {
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const { INTERIOR_FINISH_OPTIONS } = useContext(Library3dDataContext);
  const { exteriorFinish, interiorFinish, selectedContainer, flooring } =
    useContext(PageDataContext);

  const { nodes, materials } = useGLTF(
    "/models/container/20/container-shell.glb"
  );

  const { materials: flooringMaterial } = useGLTF(
    `/models/materials/flooring/${flooring.fileName}.glb`
  );

  // Load all paint materials
  const { materials: redPaint } = useGLTF(
    `/models/materials/exterior/red-paint.glb`
  );
  const { materials: whitePaint } = useGLTF(
    `/models/materials/exterior/white-paint.glb`
  );
  const { materials: greenPaint } = useGLTF(
    `/models/materials/exterior/green-paint.glb`
  );
  const { materials: bluePaint } = useGLTF(
    `/models/materials/exterior/blue-paint.glb`
  );
  const { materials: slateGreyPaint } = useGLTF(
    `/models/materials/exterior/slate-grey-paint.glb`
  );

  const exteriorPaint = useMemo(() => {
    switch (exteriorFinish.name) {
      case "Red":
        return redPaint[exteriorFinish.glbObject];
      case "White":
        return whitePaint[exteriorFinish.glbObject];
      case "Green":
        return greenPaint[exteriorFinish.glbObject];
      case "Blue":
        return bluePaint[exteriorFinish.glbObject];
      case "Slate Grey":
        return slateGreyPaint[exteriorFinish.glbObject];
      default:
        return null;
    }
  }, [
    exteriorFinish,
    redPaint,
    whitePaint,
    greenPaint,
    bluePaint,
    slateGreyPaint,
  ]);

  const ref = useRef();

  const adjustForX = useMemo(() => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  }, [selectedContainer.name, DIMENSIONS]);

  const adjustForY = useMemo(() => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  }, [selectedContainer.name, DIMENSIONS]);

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
      position={[adjustForX, 0, adjustForY]}
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
