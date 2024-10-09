import { noneOption } from "@/utils/constants/components/flooring/flooringData";
import { useFlooringGLTFModels, useInteriorGLTFModels } from "@/utils/hooks/containers/useGLTFModels";
import { useGLTF } from "@react-three/drei";

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
          position={[10.831, 2.48, -0.083]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopNodes['40FT_HC_Blank_Plywood_reartop'].geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_2.geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_4.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_6.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_7.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_8.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_9.geometry
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
          position={[10.831, 2.48, -0.083]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopNodes['40FT_HC_Blank_Plywood_reartop'].geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_2.geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_4.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_6.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_7.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_8.geometry
            }
            material={barnWoodMaterial['Barn Wood Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_9.geometry
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
          position={[10.831, 2.48, -0.083]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopNodes['40FT_HC_Blank_Plywood_reartop'].geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_2.geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_4.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_6.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_7.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_8.geometry
            }
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_9.geometry
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
          position={[10.831, 2.48, -0.083]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              rearTopNodes['40FT_HC_Blank_Plywood_reartop'].geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_1.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_2.geometry
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_4.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_5.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_6.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_7.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_8.geometry
            }
            material={luanWallMaterial['Luan Wall Panels']}
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
              rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_9.geometry
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
      <group position={[3.089, 0.173, -1.22]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            flooringNodes['40FT_HC_Interior_Timber_Blank_Floor_001'].geometry
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

const AtAndS = ({ interiorFinishes, containerSize, selectedContainerHeight, supplier, flooring }) => {
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
      <Flooring
        flooring={flooring}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
        supplier={supplier}
      />
    </>
  )
};

export default AtAndS;