import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Roof = ({
  exteriorPaint,
  selectedRoof,
  supplier,
  selectedShedHeight,
  selectedShed,
  adjustForX,
  adjustForY,
}) => {
  if (selectedRoof.name === COMPONENT_NAMES.SLANT_ROOF) {
    const { nodes, materials } = useGLTF(
      `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/slant.glb`
    );
    const { nodes: roofBattenNodes, materials: roofBattenMaterials } = useGLTF(
      `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/roof-battens.glb`
    );
    return (
      <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
        <mesh
          castShadow
          receiveShadow
          geometry={roofBattenNodes.Roof_batten.geometry}
          material={roofBattenMaterials.Roof_batten}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_siding.geometry}
          material={materials.Roof_Siding}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_top.geometry}
          material={materials['galvanized  alum metal']}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trims.geometry}
          material={materials.Vertical_Trim}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_framing.geometry}
          material={materials.Framing_Wood}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_interior.geometry}
          material={materials.Roof_interior}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_exterior001.geometry}
          material={new THREE.MeshStandardMaterial({ map: exteriorPaint })}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_ceiling.geometry}
          material={materials.Roof_Ceiling}
          scale={0.025}
        />
      </group>
    );
  } else {
    const { nodes, materials } = useGLTF(
      `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/gable.glb`
    );
    const clonedMaterial = materials.Roof_Exterior.clone();
    clonedMaterial.map = exteriorPaint;
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
          material={clonedMaterial}
          scale={0.025}
        />
      </group>
    );
  }
};

export default Roof;
