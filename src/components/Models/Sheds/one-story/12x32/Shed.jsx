import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import Roof from './Roof';
import Interior from './Interior';

export const Shed = ({ exteriorPaint }) => {
  const {
    selectedShedHeight,
    selectedRoof,
    supplier,
    selectedShed,
    showExterior,
    shedSize,
  } = useContext(ShedDataContext);

  // Load all 3d objects
  const { nodes: groundBlockNodes, materials: groundBlockMaterials } = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/1storey_12x32_GFBlock.glb`
  );
  const {
    nodes: groundBlockBattenNodes,
    materials: groundBlockBattenMaterials,
  } = useGLTF(`/models/shed/${selectedShedHeight}/${shedSize}/battens.glb`);

  const ref = useRef();

  const adjustForX = useMemo(() => {
    return -(DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.THREE_D.WIDTH / 2);
  }, [DIMENSIONS]);

  const adjustForY = useMemo(() => {
    return DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.THREE_D.DEPTH / 2;
  }, [DIMENSIONS]);

  const shedMesh = (
    <>
      <group
        scale={8}
        dispose={null}
        position={[adjustForX, 0, adjustForY]}
        ref={ref}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockBattenNodes.Trims.geometry}
          material={groundBlockBattenMaterials.Vertical_Trim}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.Vertical_Trim001.geometry}
          material={groundBlockMaterials.Vertical_Trim}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.GF_BaseBoard001.geometry}
          material={groundBlockMaterials.Base_Board}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.GF_FloorFinish001.geometry}
          material={groundBlockMaterials.GF_Flooring}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.GF_framing001.geometry}
          material={groundBlockMaterials.Framing_Wood}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.base_concrete.geometry}
          material={groundBlockMaterials['Big concrete blocks']}
          scale={0.025}
        />
      </group>
      {showExterior && (
        <Roof
          exteriorPaint={exteriorPaint}
          selectedRoof={selectedRoof}
          supplier={supplier}
          selectedShedHeight={selectedShedHeight}
          selectedShed={selectedShed}
          adjustForX={adjustForX}
          adjustForY={adjustForY}
        />
      )}
      <Interior
        supplier={supplier}
        selectedShedHeight={selectedShedHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
        shedSize={shedSize}
      />
    </>
  );

  return shedMesh;
};
