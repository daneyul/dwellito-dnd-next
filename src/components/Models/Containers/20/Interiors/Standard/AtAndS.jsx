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
    const whiteShiplapMaterial = useInteriorMaterial(supplier, {
      name: INTERIOR_FINISH_NAMES.WHITE_SHIPLAP,
      glbObject: 'Barn Wood Wall Panels',
    });
    const { nodes: rearTopNodes } = useGLTF(
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
          geometry={rearTopNodes['20FT_Blank_Plywood_reartop'].geometry}
          material={whiteShiplapMaterial}
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
          geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop.geometry}
          material={whiteShiplapMaterial}
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
          geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_1.geometry}
          material={whiteShiplapMaterial}
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
          geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_3.geometry}
          material={whiteShiplapMaterial}
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
          geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_4.geometry}
          material={whiteShiplapMaterial}
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
          geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_5.geometry}
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
          position={[3.965, 2.48, -0.081]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={rearTopNodes['20FT_Blank_Plywood_reartop'].geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_1.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_3.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_4.geometry}
            material={luanWallMaterial}
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
            geometry={rearTopNodes.Obj_20FT_Blank_Plywood_reartop_5.geometry}
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
      <group position={[3.059, 0.173, -1.219]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            flooringNodes['20FT_Interior_Echo_Blank_Floor_001'].geometry
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
  flooring
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
