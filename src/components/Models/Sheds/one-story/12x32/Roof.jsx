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
  const { nodes: roofBattenNodes, materials: roofBattenMaterials } = useGLTF(
    `/models/${supplier}/roofs/${selectedShedHeight}/${selectedShed.size}/roof-battens.glb`
  );
  const clonedMaterial = gableMaterials.Roof_Exterior.clone();
  clonedMaterial.map = exteriorPaint;
  
  return (
    <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
      {selectedRoof.name === COMPONENT_NAMES.SLANT_ROOF ? (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={roofBattenNodes.Trims.geometry}
            material={roofBattenMaterials.Vertical_Trim}
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
          <group scale={0.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={gableNodes.Object_2.geometry}
              material={gableMaterials.Roof_Siding}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={gableNodes.Object_3.geometry}
              material={gableMaterials.Roof_Siding}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_1.geometry}
            material={gableMaterials.Vertical_Trim}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_4.geometry}
            material={gableMaterials.Roof_Ceiling}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_5.geometry}
            material={gableMaterials.Framing_Wood}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_6.geometry}
            material={gableMaterials['galvanized  alum metal']}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Roof_exteriorwall.geometry}
            scale={0.025}
          >
            <primitive
              object={gableMaterials.Roof_Exterior}
              attach='material'
              onUpdate={(material) => {
                material.map = exteriorPaint;
                material.map.encoding = THREE.sRGBEncoding;
                material.map.needsUpdate = true;
              }}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_8.geometry}
            material={gableMaterials.Roof_interior}
            scale={0.025}
          />
        </>
      )}
    </group>
  );
};

export default Roof;
