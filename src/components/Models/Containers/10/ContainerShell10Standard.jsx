import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { PageDataContext } from '@/components/Content/Content';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';

export default function ContainerShell10Standard() {
  const { DIMENSIONS } = useContext(Library2dDataContext);

  const {
    INTERIOR_FINISH_OPTIONS,
    FLOORING_OPTIONS,
    redPaint,
    whitePaint,
    greenPaint,
    bluePaint,
    slateGreyPaint,
    beigePaint,
    echoFloor,
    timberFloor,
  } = useContext(Library3dDataContext);

  const {
    exteriorFinish,
    interiorFinish,
    selectedContainer,
    flooring,
    selectedContainerHeight,
  } = useContext(PageDataContext);

  // Load all 3d objects
  const { nodes, materials } = useGLTF(
    `/models/container/10/${selectedContainerHeight}/container-shell.glb`
  );
  const { nodes: rearTopPlywoodNodes, materials: rearTopPlywoodMaterials } =
    useGLTF(
      `/models/container/10/${selectedContainerHeight}/rear-top-plywood.glb`
    );
  const { nodes: rearTopDrywallNodes, materials: rearTopDrywallMaterials } =
    useGLTF(
      `/models/container/10/${selectedContainerHeight}/rear-top-drywall.glb`
    );
  const { nodes: rearTopSprayFoamNodes, materials: rearTopSprayFoamMaterials } =
    useGLTF(
      `/models/container/10/${selectedContainerHeight}/rear-top-sprayfoam.glb`
    );
  const { nodes: flooringNodes } = useGLTF(
    `/models/container/10/${selectedContainerHeight}/flooring.glb`
  );

  const flooringMaterial = useMemo(() => {
    switch (flooring.type) {
      case 'Echo':
        return echoFloor[flooring.glbObject];
      case 'Timber':
        return timberFloor[flooring.glbObject];
      default:
        return null;
    }
  }, [echoFloor, timberFloor, flooring]);

  const exteriorPaint = useMemo(() => {
    switch (exteriorFinish.name) {
      case 'Red':
        return redPaint[exteriorFinish.glbObject];
      case 'White':
        return whitePaint[exteriorFinish.glbObject];
      case 'Green':
        return greenPaint[exteriorFinish.glbObject];
      case 'Blue':
        return bluePaint[exteriorFinish.glbObject];
      case 'Slate Grey':
        return slateGreyPaint[exteriorFinish.glbObject];
      case 'Beige':
        return beigePaint[exteriorFinish.glbObject];
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
          <group
            position={[0.909, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={rearTopPlywoodNodes['10FT_Blank_Plywood_reartop'].geometry}
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.093, 0.148, -1.744]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop.geometry}
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[1.867, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop_1.geometry}
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.093, 0.148, -1.718]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop_2.geometry}
              material={rearTopPlywoodMaterials.Black_Rubber_01}
              scale={0.01}
            />
          </group>
          <group
            position={[0.093, 0.148, -0.625]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop_3.geometry}
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
        </>
      );
    }
  };

  const Drywall = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[1]) {
      return (
        <>
          <group
            position={[2.324, 2.479, -0.075]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes['10FT_Blank_Drywall_Reartop'].geometry
              }
              material={rearTopDrywallMaterials.Drywall_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.909, 2.48, -0.075]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_10FT_Blank_Drywall_Reartop.geometry
              }
              material={rearTopDrywallMaterials.Drywall_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.093, 0.148, -0.616]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_10FT_Blank_Drywall_Reartop_1.geometry
              }
              material={rearTopDrywallMaterials.Drywall_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.093, 0.148, -1.736]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_10FT_Blank_Drywall_Reartop_2.geometry
              }
              material={rearTopDrywallMaterials.Drywall_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.093, 0.148, -1.71]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_10FT_Blank_Drywall_Reartop_3.geometry
              }
              material={rearTopDrywallMaterials.Black_Paint_01}
              scale={0.01}
            />
          </group>
        </>
      );
    }
  };

  const SprayFoamCeiling = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[2]) {
      return (
        <></>
      )
    }
  }

  const SprayFoamCw = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[3]) {
      return (
        <group
        position={[6.031, 1.085, -2.005]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={rearTopSprayFoamNodes['10FT_Container_Sprayfoam_RearTop_1'].geometry}
            material={rearTopSprayFoamMaterials.Black_Rubber_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={rearTopSprayFoamNodes['10FT_Container_Sprayfoam_RearTop_2'].geometry}
            material={rearTopSprayFoamMaterials.Sprayfoam}
          />
        </group>
      </group>
      )
    }
  }

  const Lighting = () => {
    return (
      <>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials['White_Mtl.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_1.geometry}
          material={materials['Emissive_Light.001']}
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
          geometry={flooringNodes['10FT_Interior_Blank_Floor_001'].geometry}
          material={flooringMaterial}
          position={[3.031, 0.173, -1.216]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
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
        geometry={nodes.mesh_2.geometry}
        material={exteriorPaint}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3.geometry}
        material={exteriorPaint}
      />
      <Lighting />
      <Plywood />
      <Drywall />
      <SprayFoamCeiling />
      <SprayFoamCw />
      {flooring !== FLOORING_OPTIONS[0] && <Flooring />}
    </group>
  );

  return containerMesh;
}
