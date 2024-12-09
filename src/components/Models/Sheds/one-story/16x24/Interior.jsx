import { useGLTF } from '@react-three/drei';

const Interior = ({
  supplier,
  selectedShedHeight,
  adjustForX,
  adjustForY,
  shedSize,
}) => {
  const { nodes, materials } = useGLTF(
    `/models/${supplier}/interiors/${selectedShedHeight}/${shedSize}/interiors.glb`
  );
  return (
    <group scale={8} dispose={null} position={[adjustForX, 0, adjustForY]}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['door-metal [imported]']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['door-metal [imported]']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials['door-metal [imported]']}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6001.geometry}
          material={materials['wood door']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['wood door']}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_1002.geometry}
          material={materials.Base_Board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials.Base_Board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3001.geometry}
          material={materials.Base_Board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4002.geometry}
          material={materials.Base_Board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5002.geometry}
          material={materials.Base_Board}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6_2.geometry}
          material={materials.GF_interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.GF_interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8001.geometry}
          material={materials.GF_interior}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bathroom_sink_porcelein_2.geometry}
          material={materials.sink_porcelain}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bathroom_sink.geometry}
          material={materials.sink}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bathroom_toilet.geometry}
          material={materials['toilet_porcelain.001 ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.kitchenette_mixer001.geometry}
          material={materials['kitchenette_mixer.001_2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mirrorcab_cabinet.geometry}
          material={materials.mirrorcab}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mirrorcab_mirror.geometry}
          material={materials['mirror.001 (1)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_1001.geometry}
          material={materials['bathroom_ground.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.kitchenette_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sink_mixer.geometry}
          material={materials['sink_mixer.001 (1)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.towel_handle.geometry}
          material={materials.towel_handle}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['kitchenette_wood_oak.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['kitchenette_wood_oak.001']}
        />
      </group>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.cabinets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.cabinets}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.kitchenette_handle}
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
        material={materials['kitchenette_metal.001 [imported]']}
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
        geometry={nodes.defaultMaterial.geometry}
        material={materials['DefaultMaterial.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials['fridge_steel.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1.geometry}
        material={materials.bathtub_metal}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4001.geometry}
        material={materials['Tile reflective']}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5001.geometry}
        material={materials['Gray Glass.001']}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bathtub.geometry}
        material={materials.Material_2}
        scale={0.025}
      />
    </group>
  );
};

export default Interior;
