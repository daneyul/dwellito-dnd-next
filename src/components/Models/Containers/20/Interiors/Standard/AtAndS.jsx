import { noneOption } from '@/utils/constants/components/flooring/flooringData';
import {
  useFlooringGLTFModels,
  useInteriorGLTFModels,
} from '@/utils/hooks/containers/useGLTFModels';
import { useGLTF } from '@react-three/drei';

const WhiteShiplap = ({
  interiorFinishes,
  containerSize,
  selectedContainerHeight,
  supplier,
}) => {
  if (interiorFinishes.interiorIsWhiteShiplap) {
    const { whiteShiplapMaterial } = useInteriorGLTFModels(supplier);
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
          material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
          material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
          material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
          material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
          material={whiteShiplapMaterial['Barn Wood Wall Panels']}
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
    const { luanWallMaterial } = useInteriorGLTFModels(supplier);
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
            material={luanWallMaterial['Luan Wall Panels']}
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
            material={luanWallMaterial['Luan Wall Panels']}
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
            material={luanWallMaterial['Luan Wall Panels']}
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
            material={luanWallMaterial['Luan Wall Panels']}
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
            material={luanWallMaterial['Luan Wall Panels']}
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
  containerSize,
  selectedContainerHeight,
  supplier,
}) => {
  if (flooring.name !== noneOption?.name) {
    const { echoFloor, timberFloor, rubberFloor } = useFlooringGLTFModels(supplier);
    const { nodes: flooringNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/flooring.glb`
    );

    const flooringMaterial = () => {
      switch (flooring.type) {
        case 'Echo':
          return echoFloor[flooring.glbObject];
        case 'Timber':
          return timberFloor[flooring.glbObject];
        case 'Rubber':
          return rubberFloor[flooring.glbObject];
        default:
          return null;
      }
    };

    return (
      <group position={[3.059, 0.173, -1.219]} rotation={[-Math.PI / 2, 0, 0]}>
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
