import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { getExteriorPaint } from '@/utils/hooks/containers/useGLTFModels';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import CustomCubes from './Interiors/Standard/CustomCubes';
import {
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  EXTERIORS,
  SUPPLIER_SLUGS,
} from '@/utils/constants/names/names';
import AtAndS from './Interiors/Standard/AtAndS';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriors/exteriorData';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

export default function ContainerShell40Standard({ paint }) {
  const {
    exteriorFinish,
    interiorFinishes,
    selectedContainer,
    flooring,
    selectedContainerHeight,
    hasWrapLighting,
    hasCanLighting,
    containerSize,
    supplier,
    hasRedCorners,
  } = useContext(ContainerDataContext);

  // Load all 3d objects
  const { nodes, materials } = useGLTF(
    `/models/container/${containerSize()}/${selectedContainerHeight}/container-shell.glb`
  );

  const exteriorPaint = useMemo(() => {
    return getExteriorPaint(supplier, exteriorFinish, paint);
  }, [supplier, exteriorFinish, paint]);

  const ref = useRef();

  const adjustForX = useMemo(() => {
    if (selectedContainer.slug === CONTAINER_SIZE_10) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  }, [selectedContainer.slug, DIMENSIONS]);

  const adjustForY = useMemo(() => {
    if (selectedContainer.slug === CONTAINER_SIZE_10) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  }, [selectedContainer.slug, DIMENSIONS]);

  const Lighting = () => {
    if (hasWrapLighting) {
      if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
        // Render AT&S wrap lighting with 5 lights
        const { nodes: lightingNodes, materials: lightingMaterials } = useGLTF(
          `/models/container/${containerSize()}/${selectedContainerHeight}/led-lights.glb`
        );
        return (
          <group scale={0.001}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_9'].geometry
              }
              material={lightingMaterials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_8'].geometry
              }
              material={lightingMaterials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_7'].geometry
              }
              material={lightingMaterials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_6'].geometry
              }
              material={lightingMaterials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_5'].geometry
              }
              material={lightingMaterials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_4'].geometry
              }
              material={lightingMaterials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_3'].geometry
              }
              material={lightingMaterials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_2'].geometry
              }
              material={lightingMaterials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole_10'].geometry
              }
              material={lightingMaterials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                lightingNodes['40FT_Container_Exterior_Blank_Whole'].geometry
              }
              material={lightingMaterials.White_Mtl}
            />
          </group>
        );
      } else {
        // Render Custom Cubes wrap lighting with 6 lights
        return (
          <group
            position={[6.077, 1.138, -4.275]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1, 0.915, 1]}
          >
            <group scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes['40FT_Container_Exterior_Blank_Whole_1'].geometry
                }
                material={materials.Emissive_Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes['40FT_Container_Exterior_Blank_Whole_3'].geometry
                }
                material={materials.White_Mtl}
              />
            </group>
          </group>
        );
      }
    } else if (hasCanLighting) {
      const { nodes, materials } = useGLTF(
        `/models/container/${containerSize()}/${selectedContainerHeight}/can-lights.glb`
      );

      return (
        <group dispose={null}>
          <group scale={0.305}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_1.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.White_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.White_Mtl}
            />
          </group>
          <group scale={0.305}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.Emissive_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.Emissive_Light}
            />
          </group>
        </group>
      );
    } else {
      return null;
    }
  };

  const Corners = () => {
    const { nodes: cornerNodes } = useGLTF(
      `/models/container/${containerSize()}/${selectedContainerHeight}/corners.glb`
    );
    const redPaint = EXTERIOR_FINISH_OPTIONS.find(
      (item) => item.name === EXTERIORS.SAF_RED
    );

    const cornerPaint = getExteriorPaint(supplier, redPaint, paint);
    return (
      <group scale={0.001}>
        {Object.keys(cornerNodes).map((nodeKey) => {
          const node = cornerNodes[nodeKey];
          if (node.isMesh) {
            return (
              <mesh
                key={nodeKey}
                castShadow
                receiveShadow
                geometry={node.geometry}
                material={cornerPaint}
              />
            );
          }
          return null;
        })}
      </group>
    );
  };

  const Interiors = () => {
    if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
      return (
        <CustomCubes
          interiorFinishes={interiorFinishes}
          containerSize={containerSize}
          selectedContainerHeight={selectedContainerHeight}
          flooring={flooring}
          supplier={supplier}
        />
      );
    } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
      return (
        <AtAndS
          interiorFinishes={interiorFinishes}
          containerSize={containerSize}
          selectedContainerHeight={selectedContainerHeight}
          flooring={flooring}
          supplier={supplier}
        />
      );
    }
  };

  const containerMesh = (
    <group
      dispose={null}
      scale={[10, 10, 10]}
      position={[adjustForX, 0, adjustForY]}
      ref={ref}
    >
      <group
        position={[11.748, 4.727, -1.682]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['40FT_Container_Exterior_Blank_Ceiling'].geometry}
          material={exteriorPaint}
          scale={0.01}
        />
      </group>
      <group
        position={[6.077, 1.138, -4.275]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['40FT_Container_Exterior_Blank_Whole_2'].geometry}
            material={exteriorPaint}
          />
        </group>
      </group>
      <Lighting />
      {hasRedCorners ? <Corners /> : null}
      <Interiors />
    </group>
  );

  return containerMesh;
}
