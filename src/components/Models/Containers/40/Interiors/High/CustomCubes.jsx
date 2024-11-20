/* eslint-disable react-hooks/rules-of-hooks */
import { noneOption } from "@/utils/constants/components/flooring/flooringData";
import { useFlooringMaterial } from "@/utils/hooks/containers/useGLTFModels";
import { useGLTF } from "@react-three/drei";

const Flooring = ({ flooring, containerSize, selectedContainerHeight, supplier }) => {
  if (flooring.name !== noneOption?.name) {
    const { nodes: flooringNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/flooring.glb`
    );

    const flooringMaterial = useFlooringMaterial(supplier, {
      name: flooring.name,
      glbObject: flooring.glbObject,
    });
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
  } else {
    return null;
  }
};

const SprayFoamCeiling = ({ interiorFinishes, containerSize, selectedContainerHeight }) => {
  if (interiorFinishes.interiorIsSprayFoamCeiling) {
    const {
      nodes: ceilingSprayFoamNodes,
      materials: ceilingSprayFoamMaterials,
    } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/ceiling-sprayfoam.glb`
    );
    return (
      <mesh
        castShadow
        receiveShadow
        geometry={ceilingSprayFoamNodes['40FT_HC_Sprayfoam_Ceiling'].geometry}
        material={ceilingSprayFoamMaterials.Sprayfoam}
        position={[0, 2.886, 0.137]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
    );
  } else {
    return null;
  }
};

const SprayFoamCw = ({ interiorFinishes, containerSize, selectedContainerHeight }) => {
  if (interiorFinishes.interiorIsSprayFoamCeilingWalls) {
    const {
      nodes: rearTopSprayFoamNodes,
      materials: rearTopSprayFoamMaterials,
    } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-sprayfoam.glb`
    );
    return (
      <>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopSprayFoamNodes['40FT_HC_Sprayfoam_RearTop_1'].geometry
            }
            material={rearTopSprayFoamMaterials.Black_Rubber_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopSprayFoamNodes['40FT_HC_Sprayfoam_RearTop_2'].geometry
            }
            material={rearTopSprayFoamMaterials.Sprayfoam}
          />
        </group>
      </>
    );
  } else {
    return null;
  }
};

const Plywood = ({ interiorFinishes, containerSize, selectedContainerHeight }) => {
  if (interiorFinishes.interiorIsPlywood) {
    const { nodes: rearTopPlywoodNodes, materials: rearTopPlywoodMaterials } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
      );
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
  } else {
    return null;
  }
};

const Drywall = ({ interiorFinishes, containerSize, selectedContainerHeight }) => {
  if (interiorFinishes.interiorIsDrywall) {
    const { nodes: rearTopDrywallNodes, materials: rearTopDrywallMaterials } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-drywall.glb`
      );
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
  } else {
    return null;
  }
};

export const CustomCubes = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
  flooring,
  supplier
}) => {
  return (
    <>
      <Flooring
        flooring={flooring}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
        supplier={supplier}
      />
      <SprayFoamCeiling
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
      />
      <SprayFoamCw
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
      />
      <Plywood
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
      />
      <Drywall
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
      />
    </>
  );
};