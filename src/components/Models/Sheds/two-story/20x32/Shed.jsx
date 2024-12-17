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
    showSecondFloor
  } = useContext(ShedDataContext);

  // Load all 3d objects
  const { nodes: gfNodes, materials: gfMaterials } = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/2storey_20x32_GFBlock.glb`
  );
  const { nodes: ffNodes, materials: ffMaterials } = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/2storey_20x32_FFBlock.glb`
  );

  const ref = useRef();

  const adjustForX = useMemo(() => {
    return -(DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.THREE_D.WIDTH / 2);
  }, [DIMENSIONS]);

  const adjustForY = useMemo(() => {
    return DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.THREE_D.DEPTH / 2;
  }, [DIMENSIONS]);

  const firstFloorMesh = (
    <>
       <mesh
        castShadow
        receiveShadow
        geometry={gfNodes.trims.geometry}
        material={gfMaterials.Vertical_Trim}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={gfNodes.GF_floorfinish.geometry}
        material={gfMaterials.GF_Flooring}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={gfNodes.GF_framing.geometry}
        material={gfMaterials.Framing_Wood}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={gfNodes.concrete_foundation.geometry}
        material={gfMaterials['Big concrete blocks']}
        scale={0.025}
      />
    </>
  );

  const secondFloorMesh = (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={ffNodes.trims.geometry}
        material={ffMaterials.Vertical_Trim}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={ffNodes.Object_1.geometry}
        material={ffMaterials['GF_Ceiling.001']}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={ffNodes.Object_2.geometry}
        material={ffMaterials['FF_Flooring.001']}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={ffNodes.Object_3.geometry}
        material={ffMaterials['Framing_Wood.001']}
        scale={0.025}
      />
    </>
  );

  const shedMesh = (
    <>
      <group
        scale={8}
        dispose={null}
        position={[adjustForX, 0, adjustForY]}
        ref={ref}
      >
        {firstFloorMesh}
        {showSecondFloor && secondFloorMesh}
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
        showSecondFloor={showSecondFloor}
      />
    </>
  );

  return shedMesh;
};
