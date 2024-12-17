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
  return (
    <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
      {selectedRoof.name === COMPONENT_NAMES.SLANT_ROOF ? (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_ceiling.geometry}
            material={slantMaterials.Roof_Ceiling}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Object_23.geometry}
            scale={0.025}
          >
            <meshStandardMaterial map={exteriorPaint} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_interior.geometry}
            material={slantMaterials.Roof_interior}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_top.geometry}
            material={slantMaterials['galvanized  alum metal']}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={slantNodes.Roof_siding.geometry}
            material={slantMaterials.Roof_Siding}
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
            geometry={slantNodes.Roof_framing.geometry}
            material={slantMaterials.Framing_Wood}
            scale={0.025}
          />
        </>
      ) : (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Roof_top.geometry}
            material={gableMaterials['galvanized  alum metal']}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Trims.geometry}
            material={gableMaterials.Vertical_Trim}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Roof_siding.geometry}
            material={gableMaterials.Roof_Siding}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Roof_framing.geometry}
            material={gableMaterials.Framing_Wood}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Object_2.geometry}
            scale={0.025}
          >
            <primitive
              object={gableMaterials.Roof_Exterior001}
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
            geometry={gableNodes.Roof_interior.geometry}
            material={gableMaterials.Roof_interior}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={gableNodes.Roof_ceiling_2.geometry}
            material={gableMaterials['Roof_Ceiling.001']}
            scale={0.025}
          />
        </>
      )}
    </group>
  );
};

export default Roof;
