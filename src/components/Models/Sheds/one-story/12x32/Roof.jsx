import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Roof = ({
  exteriorPaint,
  supplier,
  selectedShedHeight,
  selectedShed,
  adjustForX,
  adjustForY,
}) => {
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
        geometry={roofBattenNodes.Trims.geometry}
        material={roofBattenMaterials.Vertical_Trim}
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
        geometry={nodes.Roof_Ceiling001.geometry}
        material={materials.Roof_Ceiling}
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
        geometry={nodes.Roof_interior001.geometry}
        material={materials.Roof_interior}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Framing001.geometry}
        material={materials.Framing_Wood}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Siding001.geometry}
        material={materials.Roof_Siding}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Top001.geometry}
        material={materials['galvanized  alum metal']}
        scale={0.025}
      />
    </group>
  );
};

export default Roof;
