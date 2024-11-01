import { useGLTF } from '@react-three/drei';

const Interior = ({ supplier, selectedShedHeight, adjustForX, adjustForY }) => {
  const { nodes, materials } = useGLTF(
    `/models/${supplier}/interiors/${selectedShedHeight}/interiors.glb`
  );
  return (
    <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GF_interiorwall1.geometry}
          material={materials['GF_interior.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GF_interiorwall2.geometry}
          material={materials['GF_interior.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GF_interiorwall3.geometry}
          material={materials['GF_interior.001']}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_1.geometry}
          material={materials.door_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.door_metal}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['wood door']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kitchenette_white.geometry}
        material={materials.kichenette_white}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kitchenette_metal.geometry}
        material={materials.kitchenette_metal}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kitchenette_black.geometry}
        material={materials.kitchenette_black}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kitchenette_wood.geometry}
        material={materials.kitchenette_wood_oak}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kitchenette_mixer.geometry}
        material={materials.kitchenette_mixer}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_grey.geometry}
        material={materials.bed_grey}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_metal.geometry}
        material={materials['kitchenette_metal.001']}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_white.geometry}
        material={materials.bed_white}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bathroom_sink.geometry}
        material={materials.sink}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bathroom_sink_porcelein.geometry}
        material={materials.sink_porcelain}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bathroom_sink_mixer.geometry}
        material={materials.sink_mixer}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mirrorcab_cabinet.geometry}
        material={materials.mirrorcab}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.towel_handle.geometry}
        material={materials.towel_handle}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bathroom_toilet.geometry}
        material={materials.toilet_porcelain}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mirrorcab_mirror.geometry}
        material={materials.mirror}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.Material_8}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['PDM Grey metal Door_Handle_01']}
        scale={0.025}
      />
    </group>
  );
};

export default Interior;
