import { useGLTF } from '@react-three/drei';

const Interior = ({ supplier, selectedShedHeight, adjustForX, adjustForY }) => {
  const { nodes: interiorWallsNodes, materials: interiorWallsMaterials } =
    useGLTF(
      `/models/${supplier}/interiors/${selectedShedHeight}/interior-walls.glb`
    );
  return (
    <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={interiorWallsNodes.interior_wall1.geometry}
          material={interiorWallsMaterials.GF_interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={interiorWallsNodes.interior_wall2.geometry}
          material={interiorWallsMaterials.GF_interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={interiorWallsNodes.interior_wall3.geometry}
          material={interiorWallsMaterials.GF_interior}
        />
      </group>
    </group>
  );
};

export default Interior;
