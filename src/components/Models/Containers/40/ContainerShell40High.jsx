import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { PageDataContext } from '@/components/Content/Content';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';

export default function ContainerShell40High() {
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
    `/models/container/40/${selectedContainerHeight}/container-shell.glb`
  );
  const { nodes: rearTopDrywallNodes, materials: rearTopDrywallMaterials } =
    useGLTF(
      `/models/container/40/${selectedContainerHeight}/rear-top-drywall.glb`
    );
  const { nodes: rearTopPlywoodNodes, materials: rearTopPlywoodMaterials } =
    useGLTF(
      `/models/container/40/${selectedContainerHeight}/rear-top-plywood.glb`
    );
  const { nodes: rearTopSprayFoamNodes, materials: rearTopSprayFoamMaterials } =
    useGLTF(
      `/models/container/40/${selectedContainerHeight}/rear-top-sprayfoam.glb`
    );
  const { nodes: ceilingSprayFoamNodes, materials: ceilingSprayFoamMaterials } =
    useGLTF(
      `/models/container/40/${selectedContainerHeight}/ceiling-sprayfoam.glb`
    );
  const { nodes: flooringNodes } = useGLTF(
    `/models/container/40/${selectedContainerHeight}/flooring.glb`
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
            position={[10.831, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes['40FT_HC_Blank_Plywood_reartop'].geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.908, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -0.625]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_1.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -1.744]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_2.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -1.718]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_3.geometry
              }
              material={rearTopPlywoodMaterials.Black_Rubber_01}
              scale={0.01}
            />
          </group>
          <group
            position={[2.334, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_4.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[3.748, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_5.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[5.174, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_6.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[6.588, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_7.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[8.014, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_8.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[9.429, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_40FT_HC_Blank_Plywood_reartop_9.geometry
              }
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
            position={[10.831, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes['40FT_HC_Blank_Drywall_Reartop'].geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[0.908, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -0.625]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_1.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -1.744]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_2.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -1.718]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_3.geometry
              }
              material={rearTopDrywallMaterials.Black_Rubber}
              scale={0.01}
            />
          </group>
          <group
            position={[2.334, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_4.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[3.748, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_5.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[5.174, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_6.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[6.588, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_7.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[8.014, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_8.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[9.429, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_40FT_HC_Blank_Drywall_Reartop_9.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
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
          geometry={nodes['40FT_HC_Container_Exterior_Blank_Whole_1'].geometry}
          material={materials.Emissive_Light}
        />
      </>
    );
  };

  const Flooring = () => {
    return (
      <group position={[3.089, 0.173, -1.22]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            flooringNodes['40FT_HC_Interior_Timber_Blank_Floor_001'].geometry
          }
          material={flooringMaterial}
          scale={0.01}
        />
      </group>
    );
  };

  const SprayFoamCeiling = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[2]) {
      return (
        <group position={[0, 2.886, 0.137]} rotation={[Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              ceilingSprayFoamNodes['40FT_HC_Sprayfoam_Ceiling'].geometry
            }
            material={ceilingSprayFoamMaterials.Sprayfoam}
            scale={0.01}
          />
        </group>
      );
    }
  };

  const SprayFoamCw = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[3]) {
      return (
        <>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={rearTopSprayFoamNodes['40FT_HC_Sprayfoam_RearTop_1'].geometry}
                material={rearTopSprayFoamMaterials.Black_Rubber_01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={rearTopSprayFoamNodes['40FT_HC_Sprayfoam_RearTop_2'].geometry}
                material={rearTopSprayFoamMaterials.Sprayfoam}
              />
            </group>
          </group>
          <group position={[0, 2.886, 0.137]} rotation={[Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={rearTopSprayFoamNodes['40FT_HC_Sprayfoam_Ceiling'].geometry}
              material={rearTopSprayFoamMaterials.Sprayfoam}
              scale={0.01}
            />
          </group>
        </>
      );
    }
  };

  const containerMesh = (
    <group
      dispose={null}
      scale={[10, 10, 10]}
      position={[adjustForX, 0, adjustForY]}
      ref={ref}
    >
      <group
        position={[6.077, 1.138, -4.275]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes['40FT_HC_Container_Exterior_Blank_Whole_1'].geometry
            }
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes['40FT_HC_Container_Exterior_Blank_Whole_2'].geometry
            }
            material={exteriorPaint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes['40FT_HC_Container_Exterior_Blank_Whole_3'].geometry
            }
            material={materials.White_Mtl}
          />
        </group>
      </group>
      <group
        position={[11.748, 4.727, -1.682]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['40FT_HC_Container_Exterior_Blank_Ceiling'].geometry}
          material={exteriorPaint}
          scale={0.01}
        />
      </group>
      <Lighting />
      <SprayFoamCeiling />
      <SprayFoamCw />
      {flooring !== FLOORING_OPTIONS[0] && <Flooring />}
      <Plywood />
      <Drywall />
    </group>
  );

  return containerMesh;
}
