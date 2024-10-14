import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { getExteriorPaint } from '@/utils/hooks/sheds/useGLTFModels';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { Base, Geometry } from '@react-three/csg';

export default function Shed({ paint }) {
  const {
    selectedShedHeight,
    selectedRoof,
    supplier,
    selectedShed,
    exteriorFinish,
  } = useContext(ShedDataContext);

  // Load all 3d objects
  const { nodes: groundBlockNodes, materials: groundBlockMaterials } = useGLTF(
    `/models/shed/${selectedShedHeight}/1storey_12x24_GFBlock.glb`
  );

  const exteriorPaint = useMemo(() => {
    return getExteriorPaint(supplier, exteriorFinish, paint);
  }, [supplier, exteriorFinish, paint]);

  const ref = useRef();

  const adjustForX = useMemo(() => {
    return -(DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.WIDTH / 2);
  }, [DIMENSIONS]);

  const adjustForY = useMemo(() => {
    return DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.DEPTH / 2;
  }, [DIMENSIONS]);

  const Roof = () => {
    if (selectedRoof.name === COMPONENT_NAMES.SLANT_ROOF) {
      const { nodes, materials } = useGLTF(
        `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/slant.glb`
      );
      return (
        <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.Framing_Wood}
            />
          </group>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.Vertical_Trim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.Vertical_Trim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Vertical_Trim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.Vertical_Trim}
            />
          </group>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Roof_Siding}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.Roof_Siding}
            />
          </group>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.Roof_interior}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Roof_interior}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1.geometry}
            material={materials['galvanized  alum metal']}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.Roof_Exterior}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.Roof_Ceiling}
            scale={0.025}
          />
        </group>
      );
    } else {
      const { nodes, materials } = useGLTF(
        `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/gable.glb`
      );
      return (
        <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_1.geometry}
              material={materials.Vertical_Trim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Vertical_Trim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.Vertical_Trim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Vertical_Trim}
            />
          </group>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Roof_Siding}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Roof_Siding}
            />
          </group>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Framing_Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.Framing_Wood}
            />
          </group>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.Roof_interior}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.Roof_interior}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Roof_Ceiling}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials['galvanized  alum metal']}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.Roof_Exterior}
            scale={0.025}
          />
        </group>
      );
    }
  };

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
      {/* <Roof /> */}
    </>
  );

  return shedMesh;
}
