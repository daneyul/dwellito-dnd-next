import { useInteriorGLTFModels } from "@/utils/hooks/useGLTFModels";
import { useGLTF } from "@react-three/drei";

const CharredWood = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
  supplier
}) => {
  if (interiorFinishes.interiorIsCharredWood) {
    const { nodes: rearTopNodes } =
      useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
      );
      const { charredWoodMaterial } = useInteriorGLTFModels(supplier);
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
              rearTopNodes['10FT_Blank_Plywood_reartop'].geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_10FT_Blank_Plywood_reartop.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_10FT_Blank_Plywood_reartop_1.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
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
              rearTopNodes.Obj_10FT_Blank_Plywood_reartop_3.geometry
            }
            material={charredWoodMaterial['Ash_Grey']}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
  }
};

const AtAndS = ({ interiorFinishes, containerSize, selectedContainerHeight, supplier }) => {
  return (
    <CharredWood
      interiorFinishes={interiorFinishes}
      containerSize={containerSize}
      selectedContainerHeight={selectedContainerHeight}
      supplier={supplier}
    />
  )
};

export default AtAndS;