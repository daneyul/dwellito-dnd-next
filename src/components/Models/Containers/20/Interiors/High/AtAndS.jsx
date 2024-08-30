import { useGLTF } from "@react-three/drei";

const { useInteriorGLTFModels } = require("@/utils/hooks/useGLTFModels");

const CharredWood = ({ interiorFinishes, containerSize, selectedContainerHeight, supplier }) => {
  if (interiorFinishes.interiorIsCharredWood) {
    const { nodes: rearTopNodes } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
      );
      const { charredWoodMaterial } = useInteriorGLTFModels(supplier);
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
              rearTopNodes['20FT_HC_Blank_Plywood_reartop'].geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_2.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_3.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
    return null;
  }
};

const BarnWood = ({ interiorFinishes, containerSize, selectedContainerHeight, supplier }) => {
  if (interiorFinishes.interiorIsBarnWood) {
    const { nodes: rearTopNodes } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
      );
      const { barnWoodMaterial } = useInteriorGLTFModels(supplier);
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
              rearTopNodes['20FT_HC_Blank_Plywood_reartop'].geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_2.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_3.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
    return null;
  }
};

const MdfPanel = ({ interiorFinishes, containerSize, selectedContainerHeight, supplier }) => {
  if (interiorFinishes.interiorIsMdfPanel) {
    const { nodes: rearTopNodes } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
      );
      const { mdfPanelMaterial } = useInteriorGLTFModels(supplier);
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
              rearTopNodes['20FT_HC_Blank_Plywood_reartop'].geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_2.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_3.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
    return null;
  }
};

const LuanWall = ({ interiorFinishes, containerSize, selectedContainerHeight, supplier }) => {
  if (interiorFinishes.interiorIsLuanWall) {
    const { nodes: rearTopNodes } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
      );
      const { luanWallMaterial } = useInteriorGLTFModels(supplier);
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
              rearTopNodes['20FT_HC_Blank_Plywood_reartop'].geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_2.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_3.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_20FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
    return null;
  }
};

const AtAndS = ({ interiorFinishes, containerSize, selectedContainerHeight, supplier }) => {
  return (
    <>
      <CharredWood
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
        supplier={supplier}
      />
      <BarnWood
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
        supplier={supplier}
      />
      <MdfPanel
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
        supplier={supplier}
      />
      <LuanWall
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
        supplier={supplier}
      />
    </>
  );
};

export default AtAndS;