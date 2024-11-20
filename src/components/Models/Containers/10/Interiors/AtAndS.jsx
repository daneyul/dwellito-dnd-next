/* eslint-disable react-hooks/rules-of-hooks */
import { noneOption } from '@/utils/constants/components/flooring/flooringData';
import { FLOORING_NAMES, INTERIOR_FINISH_NAMES } from '@/utils/constants/names/names';
import {
  useFlooringGLTFModels,
  useInteriorMaterial,
} from '@/utils/hooks/containers/useGLTFModels';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const WhiteShiplap = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
  supplier,
}) => {
  if (interiorFinishes.interiorIsWhiteShiplap) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { nodes: rearTopNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/rear-top-plywood.glb`
    );
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const whiteShiplapMaterial = useInteriorMaterial(supplier, {
      name: INTERIOR_FINISH_NAMES.WHITE_SHIPLAP,
      glbObject: 'Barn Wood Wall Panels',
    });
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
            geometry={rearTopNodes['10FT_Blank_Plywood_reartop'].geometry}
            material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
            geometry={rearTopNodes.Obj_10FT_Blank_Plywood_reartop.geometry}
            material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
            geometry={rearTopNodes.Obj_10FT_Blank_Plywood_reartop_1.geometry}
            material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
            geometry={rearTopNodes.Obj_10FT_Blank_Plywood_reartop_3.geometry}
            material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
          position={[0.909, 2.48, -0.083]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={rearTopNodes['10FT_Blank_Plywood_reartop'].geometry}
            material={luanWallMaterial['Luan Wall Panels']}
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
            geometry={rearTopNodes.Obj_10FT_Blank_Plywood_reartop.geometry}
            material={luanWallMaterial['Luan Wall Panels']}
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
            geometry={rearTopNodes.Obj_10FT_Blank_Plywood_reartop_1.geometry}
            material={luanWallMaterial['Luan Wall Panels']}
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
            geometry={rearTopNodes.Obj_10FT_Blank_Plywood_reartop_3.geometry}
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

const Flooring = ({
  flooring,
  supplier,
  containerSize,
  selectedContainerHeight,
}) => {
  if (flooring.name !== noneOption?.name) {
    const { echoFloor, timberFloor, rubberCoinFloor } = useFlooringGLTFModels(supplier);
    const { nodes: flooringNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/flooring.glb`
    );

    const flooringMaterial = () => {
      if (flooring.name === FLOORING_NAMES.RUBBER_COIN) {
        return new THREE.MeshStandardMaterial({ map: rubberCoinFloor });
      }
      switch (flooring.name) {
        case FLOORING_NAMES.ECHO:
          return echoFloor[flooring.glbObject];
        case FLOORING_NAMES.TIMBER:
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
        supplier={supplier}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
      />
    </>
  );
};

export default AtAndS;
