import { noneOption } from "@/utils/constants/components/flooringData";
import { useFlooringGLTFModels } from "@/utils/hooks/useGLTFModels";
import { useGLTF } from "@react-three/drei";

const Plywood = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
}) => {
  if (interiorFinishes.interiorIsPlywood) {
    const { nodes: rearTopPlywoodNodes, materials: rearTopPlywoodMaterials } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
      );
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
            geometry={
              rearTopPlywoodNodes['10FT_Blank_Plywood_reartop'].geometry
            }
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
            geometry={
              rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop.geometry
            }
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
            geometry={
              rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop_1.geometry
            }
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
            geometry={
              rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop_2.geometry
            }
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
            geometry={
              rearTopPlywoodNodes.Obj_10FT_Blank_Plywood_reartop_3.geometry
            }
            material={rearTopPlywoodMaterials.Plywood_v2}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
  }
};

const Drywall = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
}) => {
  if (interiorFinishes.interiorIsDrywall) {
    const { nodes: rearTopDrywallNodes, materials: rearTopDrywallMaterials } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-drywall.glb`
      );
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
  } else {
    return null;
  }
};

const SprayFoamCeiling = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
}) => {
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
        geometry={ceilingSprayFoamNodes['10FT_Sprayfoam_Ceiling'].geometry}
        material={ceilingSprayFoamMaterials.Sprayfoam}
        position={[0, 2.877, 0.137]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
    );
  } else {
    return null;
  }
};

const SprayFoamCw = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
}) => {
  if (interiorFinishes.interiorIsSprayFoamCeilingWalls) {
    const {
      nodes: rearTopSprayFoamNodes,
      materials: rearTopSprayFoamMaterials,
    } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-sprayfoam.glb`
    );
    return (
      <>
        <mesh
          castShadow
          receiveShadow
          geometry={rearTopSprayFoamNodes['10FT_Sprayfoam_Ceiling'].geometry}
          material={rearTopSprayFoamMaterials.Sprayfoam}
          position={[0, 2.877, 0.137]}
          rotation={[Math.PI, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={rearTopSprayFoamNodes['10FT_Sprayfoam_Reartop'].geometry}
          material={rearTopSprayFoamMaterials.Black_Rubber_01}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </>
    );
  } else {
    return null;
  }
};

const Flooring = ({
  flooring,
  supplier,
  containerSize,
  selectedContainerHeight,
}) => {
  if (flooring.name !== noneOption?.name) {
    const { echoFloor, timberFloor } = useFlooringGLTFModels(supplier);
    const { nodes: flooringNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/flooring.glb`
    );

    const flooringMaterial = () => {
      switch (flooring.type) {
        case 'Echo':
          return echoFloor[flooring.glbObject];
        case 'Timber':
          return timberFloor[flooring.glbObject];
        default:
          return null;
      }
    };

    return (
      <>
        <mesh
          castShadow
          receiveShadow
          geometry={flooringNodes['10FT_Interior_Blank_Floor_001'].geometry}
          material={flooringMaterial()}
          position={[3.031, 0.173, -1.216]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </>
    );
  } else {
    return null;
  }
};

const CustomCubes = ({
  interiorFinishes,
  flooring,
  supplier,
  containerSize,
  selectedContainerHeight,
}) => {
  return (
    <>
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
      <Flooring
        flooring={flooring}
        supplier={supplier}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
      />
    </>
  );
};

export default CustomCubes;
