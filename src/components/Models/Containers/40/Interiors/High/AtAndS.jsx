/* eslint-disable react-hooks/rules-of-hooks */
import { noneOption } from '@/utils/constants/components/flooring/flooringData';
import { INTERIOR_FINISH_NAMES } from '@/utils/constants/names/names';
import {
  useFlooringMaterial,
  useInteriorMaterial,
} from '@/utils/hooks/containers/useGLTFModels';
import { useGLTF } from '@react-three/drei';

const WhiteShiplap = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
  supplier,
}) => {
  if (interiorFinishes.interiorIsWhiteShiplap) {
    const { nodes: rearTopNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
    );
    const whiteShiplapMaterial = useInteriorMaterial(supplier, {
      name: INTERIOR_FINISH_NAMES.WHITE_SHIPLAP,
      glbObject: 'Barn Wood Wall Panels',
    });
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
            geometry={rearTopNodes['40FT_HC_Blank_Plywood_reartop'].geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_1.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_2.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_4.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_5.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_6.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_7.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_8.geometry}
            material={whiteShiplapMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_9.geometry}
            material={whiteShiplapMaterial}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
    return null;
  }
};

const LuanWall = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
  supplier,
}) => {
  if (interiorFinishes.interiorIsLuanWall) {
    const { nodes: rearTopNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
    );
    const luanWallMaterial = useInteriorMaterial(supplier, {
      name: INTERIOR_FINISH_NAMES.LUAN_WALL,
      glbObject: 'Luan Wall Panels',
    });
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
            geometry={rearTopNodes['40FT_HC_Blank_Plywood_reartop'].geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_1.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_2.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_4.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_5.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_6.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_7.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_8.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_40FT_HC_Blank_Plywood_reartop_9.geometry}
            material={luanWallMaterial}
            scale={0.01}
          />
        </group>
      </>
    );
  } else {
    return null;
  }
};

const Flooring = ({
  flooring,
  containerSize,
  selectedContainerHeight,
  supplier,
}) => {
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

const AtAndS = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
  supplier,
  flooring,
}) => {
  return (
    <>
      <WhiteShiplap
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
  );
};

export default AtAndS;
