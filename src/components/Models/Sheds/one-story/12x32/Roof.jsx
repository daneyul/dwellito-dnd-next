import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Roof = ({
  exteriorPaint,
  supplier,
  selectedShedHeight,
  selectedShed,
  adjustForX,
  adjustForY,
  selectedRoof,
}) => {
  const { nodes: slantNodes, materials: slantMaterials } = useGLTF(
    `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/slant.glb`
  );
  const { nodes: gableNodes, materials: gableMaterials } = useGLTF(
    `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/gable.glb`
  );
  const { nodes: slantBattenNodes, materials: slantBattenMaterials } = useGLTF(
    `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/slant-battens.glb`
  );
  const { nodes: gableBattenNodes, materials: gableBattenMaterials } = useGLTF(
    `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/gable-battens.glb`
  );
  const clonedMaterial = gableMaterials['Roof_Exterior.001'].clone();
  clonedMaterial.map = exteriorPaint;

  return (
    <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
      {selectedRoof.name === COMPONENT_NAMES.SLANT_ROOF ? (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={slantBattenNodes.Trims.geometry}
            material={slantBattenMaterials.Vertical_Trim}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Trims.geometry}
            material={slantMaterials.Vertical_Trim}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_Ceiling001.geometry}
            material={slantMaterials.Roof_Ceiling}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_exterior001.geometry}
            material={new THREE.MeshStandardMaterial({ map: exteriorPaint })}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_interior001.geometry}
            material={slantMaterials.Roof_interior}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_Framing001.geometry}
            material={slantMaterials.Framing_Wood}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_Siding001.geometry}
            material={slantMaterials.Roof_Siding}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_Top001.geometry}
            material={slantMaterials['galvanized  alum metal']}
            scale={0.025}
          />
        </>
      ) : (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={gableBattenNodes.Trims.geometry}
            material={gableBattenMaterials.Vertical_Trim}
            scale={0.025}
          />
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={gableNodes.Object_5.geometry}
              material={gableMaterials.Roof_interior}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={gableNodes.Object_6.geometry}
              material={gableMaterials.Roof_interior}
            />
          </group>
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={gableNodes.Object_1001.geometry}
              material={gableMaterials['Roof_Siding.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={gableNodes.Object_2001.geometry}
              material={gableMaterials['Roof_Siding.001']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_1.geometry}
            material={gableMaterials.Roof_Ceiling}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_2.geometry}
            material={gableMaterials['galvanized  alum metal.001']}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_7.geometry}
            scale={0.025}
            material={clonedMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_8.geometry}
            material={gableMaterials.Framing_Wood}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_9.geometry}
            material={gableMaterials.Vertical_Trim}
            scale={0.025}
          />
        </>
      )}
    </group>
  );
};

export default Roof;
