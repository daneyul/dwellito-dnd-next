const { noneOption } = require("@/utils/constants/components/flooring/flooringData");
const { useFlooringGLTFModels } = require("@/utils/hooks/useGLTFModels");
const { useGLTF } = require("@react-three/drei");

const Flooring = ({ flooring, containerSize, selectedContainerHeight, supplier }) => {
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
      <group
        position={[3.059, 0.173, -1.219]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            flooringNodes['20FT_Interior_Echo_Blank_Floor_001'].geometry
          }
          material={flooringMaterial()}
          scale={0.01}
        />
      </group>
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
          position={[3.965, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopPlywoodNodes['20FT_Blank_Plywood_reartop'].geometry
            }
            material={rearTopPlywoodMaterials.Plywood_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[0.092, 0.148, -1.742]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopPlywoodNodes.Obj_20FT_Blank_Plywood_reartop.geometry
            }
            material={rearTopPlywoodMaterials.Plywood_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[4.923, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopPlywoodNodes.Obj_20FT_Blank_Plywood_reartop_1.geometry
            }
            material={rearTopPlywoodMaterials.Plywood_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[0.092, 0.148, -1.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopPlywoodNodes.Obj_20FT_Blank_Plywood_reartop_2.geometry
            }
            material={rearTopPlywoodMaterials.Black_Rubber_01}
            scale={0.01}
          />
        </group>
        <group
          position={[0.092, 0.148, -0.623]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopPlywoodNodes.Obj_20FT_Blank_Plywood_reartop_3.geometry
            }
            material={rearTopPlywoodMaterials.Plywood_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[2.517, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopPlywoodNodes.Obj_20FT_Blank_Plywood_reartop_4.geometry
            }
            material={rearTopPlywoodMaterials.Plywood_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[1.07, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopPlywoodNodes.Obj_20FT_Blank_Plywood_reartop_5.geometry
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
          position={[3.965, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopDrywallNodes['20FT_Blank_DryWall_reartop'].geometry
            }
            material={rearTopDrywallMaterials.Drywall_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[0.092, 0.148, -1.742]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopDrywallNodes.Obj_20FT_Blank_DryWall_reartop.geometry
            }
            material={rearTopDrywallMaterials.Drywall_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[4.923, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopDrywallNodes.Obj_20FT_Blank_DryWall_reartop_1.geometry
            }
            material={rearTopDrywallMaterials.Drywall_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[0.092, 0.148, -1.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopDrywallNodes.Obj_20FT_Blank_DryWall_reartop_2.geometry
            }
            material={rearTopDrywallMaterials.Black_Rubber_01}
            scale={0.01}
          />
        </group>
        <group
          position={[0.092, 0.148, -0.623]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopDrywallNodes.Obj_20FT_Blank_DryWall_reartop_3.geometry
            }
            material={rearTopDrywallMaterials.Drywall_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[2.517, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopDrywallNodes.Obj_20FT_Blank_DryWall_reartop_4.geometry
            }
            material={rearTopDrywallMaterials.Drywall_v2}
            scale={0.01}
          />
        </group>
        <group
          position={[1.07, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopDrywallNodes.Obj_20FT_Blank_DryWall_reartop_5.geometry
            }
            material={rearTopDrywallMaterials.Drywall_v2}
            scale={0.01}
          />
        </group>
      </>
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
        geometry={ceilingSprayFoamNodes['20FT_Sprayfoam_Ceiling'].geometry}
        material={ceilingSprayFoamMaterials.Sprayfoam}
        position={[0, 2.877, 0.139]}
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
        <mesh
          castShadow
          receiveShadow
          geometry={rearTopSprayFoamNodes['20FT_Sprayfoam_Ceiling'].geometry}
          material={rearTopSprayFoamMaterials.Sprayfoam}
          position={[0, 2.877, 0.139]}
          rotation={[Math.PI, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={rearTopSprayFoamNodes['20FT_Sprayfoam_RearTop'].geometry}
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

const CustomCubes = ({ interiorFinishes, containerSize, selectedContainerHeight, flooring, supplier }) => {
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