import React, { useContext, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import * as THREE from "three";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { MeshStandardMaterial } from "three";

export function CsgGeometries({ color, doorBoundingBoxes, windowBoundingBoxes, ventBoundingBoxes, interior }) {
  const { INTERIOR_OPTIONS } = useContext(Library2dDataContext);
  const { nodes: cRightNodes } = useGLTF(
    "/models/container/20/exterior-right.glb"
  );
  const { nodes: cBackNodes } = useGLTF(
    "/models/container/20/exterior-back.glb"
  );
  const { nodes: cLeftNodes } = useGLTF(
    "/models/container/20/exterior-left.glb"
  );
  const { nodes: dRightNodes } = useGLTF("/models/drywall/20/drywall-right.glb");
  const { nodes: dLeftNodes } = useGLTF("/models/drywall/20/drywall-left.glb");
  const { nodes: dBackNodes } = useGLTF("/models/drywall/20/drywall-back.glb");

  const { nodes: pRightNodes } = useGLTF("/models/plywood/20/plywood-right.glb");
  const { nodes: pLeftNodes } = useGLTF("/models/plywood/20/plywood-left.glb");
  const { nodes: pBackNodes } = useGLTF("/models/plywood/20/plywood-back.glb");

  const csg = useRef();
  const { materials: containerMaterials } = useGLTF(
    "/models/container/20/container-whole.glb"
  );
  const material = new MeshStandardMaterial({ color: color });
  console.log(containerMaterials)

  const doorBoundingBoxGeometries = useMemo(() => {
    return Object.entries(doorBoundingBoxes).map(([id, bbox]) => (
      <group key={id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
        <Subtraction>
          {/* Geometry with bounding box size */}
          <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          <mesh>
            {/* Material applied to a mesh, not directly in Subtraction */}
            <meshStandardMaterial
              attach="material"
              color="white"
              side={THREE.DoubleSide}
            />
          </mesh>
        </Subtraction>
      </group>
    ));
  }, [doorBoundingBoxes]);

  const windowBoundingBoxGeometries = useMemo(() => {
    return Object.entries(windowBoundingBoxes).map(([id, bbox]) => (
      <group key={id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
        <Subtraction>
          {/* Geometry with bounding box size */}
          <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          <mesh>
            {/* Material applied to a mesh, not directly in Subtraction */}
            <meshStandardMaterial
              attach="material"
              color="white"
              side={THREE.DoubleSide}
            />
          </mesh>
        </Subtraction>
      </group>
    ));
  }, [windowBoundingBoxes]);

  const ventBoundingBoxGeometries = useMemo(() => {
    return Object.entries(ventBoundingBoxes).map(([id, bbox]) => (
      <group key={id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
        <Subtraction>
          {/* Geometry with bounding box size */}
          <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          <mesh>
            {/* Material applied to a mesh, not directly in Subtraction */}
            <meshStandardMaterial
              attach="material"
              color="white"
              side={THREE.DoubleSide}
            />
          </mesh>
        </Subtraction>
      </group>
    ));
  }, [ventBoundingBoxes]);

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        {interior === INTERIOR_OPTIONS[1] ? (
          <>
            <Base
              geometry={dBackNodes.mesh_0.geometry}
              material={containerMaterials["White_Drywall_Wall.001"]}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={dRightNodes.mesh_0.geometry}
              material={containerMaterials["White_Drywall_Wall.001"]}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={dLeftNodes.mesh_0.geometry}
              material={containerMaterials["White_Drywall_Wall.001"]}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
          </>
        ) : null}
        {
          interior === INTERIOR_OPTIONS[0] ? (
            <>
            <Base
              geometry={pBackNodes.mesh_0.geometry}
              material={containerMaterials["Plywood_Texture_01.001"]}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={pRightNodes.mesh_0.geometry}
              material={containerMaterials["Plywood_Texture_01.001"]}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={pLeftNodes.mesh_0.geometry}
              material={containerMaterials["Plywood_Texture_01.001"]}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
          </>
          ) : null
        }
        <Base
          geometry={cRightNodes.mesh_0.geometry}
          material={material}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={cBackNodes.mesh_0.geometry}
          material={material}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={cLeftNodes.mesh_0.geometry}
          material={material}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        {doorBoundingBoxGeometries}
        {windowBoundingBoxGeometries}
        {ventBoundingBoxGeometries}
      </Geometry>
    </mesh>
  );
}
