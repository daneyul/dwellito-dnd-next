import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { PageDataContext } from '@/components/Content/Content';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';

export default function ContainerShell20High() {
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const {
    FLOORING_OPTIONS,
    INTERIOR_FINISH_OPTIONS,
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
    hasLighting
  } = useContext(PageDataContext);

  // Load all 3d objects
  const { nodes, materials } = useGLTF(
    `/models/container/20/${selectedContainerHeight}/container-shell.glb`
  );
  const { nodes: flooringNodes } = useGLTF(
    `/models/container/20/${selectedContainerHeight}/flooring.glb`
  );
  const { nodes: rearTopPlywoodNodes, materials: rearTopPlywoodMaterials } =
    useGLTF(
      `/models/container/20/${selectedContainerHeight}/rear-top-plywood.glb`
    );
  const { nodes: rearTopDrywallNodes, materials: rearTopDrywallMaterials } =
    useGLTF(
      `/models/container/20/${selectedContainerHeight}/rear-top-drywall.glb`
    );
  const { nodes: rearTopSprayFoamNodes, materials: rearTopSprayFoamMaterials } =
    useGLTF(
      `/models/container/20/${selectedContainerHeight}/rear-top-sprayfoam.glb`
    );
  const { nodes: ceilingSprayFoamNodes, materials: ceilingSprayFoamMaterials } =
    useGLTF(
      `/models/container/20/${selectedContainerHeight}/ceiling-sprayfoam.glb`
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

  const Lighting = () => {
    return (
      <>
        <group
          position={[6.019, 1.138, -4.273]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1, 0.915, 1]}
        >
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['20FT_HC_Container_Exterior_Blank_Whole_1'].geometry
              }
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['20FT_HC_Container_Exterior_Blank_Whole_3'].geometry
              }
              material={materials.White_Mtl}
            />
          </group>
        </group>
      </>
    );
  };

  const Plywood = () => {
    if (interiorFinish === INTERIOR_FINISH_OPTIONS[0]) {
      return (
        <>
          <group
            position={[3.748, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes['20FT_HC_Blank_Plywood_reartop'].geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
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
                rearTopPlywoodNodes.Obj_20FT_HC_Blank_Plywood_reartop.geometry
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
                rearTopPlywoodNodes.Obj_20FT_HC_Blank_Plywood_reartop_1.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[4.874, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_20FT_HC_Blank_Plywood_reartop_2.geometry
              }
              material={rearTopPlywoodMaterials.Plywood_v2}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -0.624]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_20FT_HC_Blank_Plywood_reartop_3.geometry
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
                rearTopPlywoodNodes.Obj_20FT_HC_Blank_Plywood_reartop_4.geometry
              }
              material={rearTopPlywoodMaterials.Black_Rubber_01}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -1.743]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopPlywoodNodes.Obj_20FT_HC_Blank_Plywood_reartop_5.geometry
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
            position={[0.908, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes['20FT_HC_Blank_drywall_reartop'].geometry
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
                rearTopDrywallNodes.Obj_20FT_HC_Blank_drywall_reartop.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -0.624]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_20FT_HC_Blank_drywall_reartop_1.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
          <group
            position={[4.874, 2.48, -0.083]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_20FT_HC_Blank_drywall_reartop_2.geometry
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
                rearTopDrywallNodes.Obj_20FT_HC_Blank_drywall_reartop_3.geometry
              }
              material={rearTopDrywallMaterials.Black_Rubber}
              scale={0.01}
            />
          </group>
          <group
            position={[0.092, 0.148, -1.743]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopDrywallNodes.Obj_20FT_HC_Blank_drywall_reartop_4.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
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
                rearTopDrywallNodes.Obj_20FT_HC_Blank_drywall_reartop_5.geometry
              }
              material={rearTopDrywallMaterials.Drywall}
              scale={0.01}
            />
          </group>
        </>
      );
    }
  };

  const Flooring = () => {
    return (
      <group position={[3.059, 0.173, -1.219]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            flooringNodes['20FT_HC_Interior_Echo_Blank_Floor_001'].geometry
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
        <group position={[0, 2.877, 0.139]} rotation={[Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              ceilingSprayFoamNodes['20FT_HC_Sprayfoam_Ceiling'].geometry
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
          <group position={[0, 2.877, 0.139]} rotation={[Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                rearTopSprayFoamNodes['20FT_HC_Sprayfoam_Ceiling'].geometry
              }
              material={rearTopSprayFoamMaterials.Sprayfoam}
              scale={0.01}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  rearTopSprayFoamNodes['20FT_HC_Sprayfoam_RearTop_1'].geometry
                }
                material={rearTopSprayFoamMaterials.Black_Rubber_01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  rearTopSprayFoamNodes['20FT_HC_Sprayfoam_RearTop_2'].geometry
                }
                material={rearTopSprayFoamMaterials.Sprayfoam}
              />
            </group>
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
        position={[6.019, 1.138, -4.273]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes['20FT_HC_Container_Exterior_Blank_Whole_2'].geometry
            }
            material={exteriorPaint}
          />
        </group>
      </group>
      <group
        position={[6.077, -1.4, -1]}
        rotation={[Math.PI, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['20FT_HC_Container_Exterior_Blank_Ceiling'].geometry}
          material={exteriorPaint}
          scale={0.01}
        />
      </group>
      <Plywood />
      <Drywall />
      {hasLighting ? <Lighting /> : null}
      <SprayFoamCeiling />
      <SprayFoamCw />
      {flooring !== FLOORING_OPTIONS[0] && <Flooring />}
    </group>
  );

  return containerMesh;
}
