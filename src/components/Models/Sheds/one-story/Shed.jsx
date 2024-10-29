import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import Roof from './Roof';
import Interior from './Interior';

const Shed = ({ exteriorPaint }) => {
  const {
    selectedShedHeight,
    selectedRoof,
    supplier,
    selectedShed,
    showExterior,
  } = useContext(ShedDataContext);

  // Load all 3d objects
  const { nodes: groundBlockNodes, materials: groundBlockMaterials } = useGLTF(
    `/models/shed/${selectedShedHeight}/1storey_12x24_GFBlock.glb`
  );

  const ref = useRef();

  const adjustForX = useMemo(() => {
    return -(DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.WIDTH / 2);
  }, [DIMENSIONS]);

  const adjustForY = useMemo(() => {
    return DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.DEPTH / 2;
  }, [DIMENSIONS]);

  const shedMesh = (
    <>
      <group
        scale={8}
        dispose={null}
        position={[adjustForX, 0, adjustForY]}
        ref={ref}
      >
        <group scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_1.geometry}
            material={groundBlockMaterials.Vertical_Trim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_2.geometry}
            material={groundBlockMaterials.Vertical_Trim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_3.geometry}
            material={groundBlockMaterials.Vertical_Trim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_4.geometry}
            material={groundBlockMaterials.Vertical_Trim}
          />
        </group>
        <group scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_10.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_11.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_12.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_13.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_14.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_15.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_16.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_17.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_18.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_19.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_20.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_21.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_22.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_23.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_24.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_25.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_26.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_27.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={groundBlockNodes.Object_28.geometry}
            material={groundBlockMaterials.Framing_Wood}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.Object_7.geometry}
          material={groundBlockMaterials.Base_Board}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.Object_8.geometry}
          material={groundBlockMaterials.GF_Flooring}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.Object_9.geometry}
          material={groundBlockMaterials.Plywood_Subfloor}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={groundBlockNodes.Object_29.geometry}
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
      />
    </>
  );

  return shedMesh;
};

export default Shed;
