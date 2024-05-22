import React, { useContext, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";

export function CsgGeometries({ color, doorBoundingBoxes, windowBoundingBoxes, ventBoundingBoxes, interior }) {
  const { INTERIOR_OPTIONS } = useContext(Library3dDataContext);
  const { nodes: cRightNodes } = useGLTF(
    "/models/container/container-exterior-right.glb"
  );
  const { nodes: cBackNodes } = useGLTF(
    "/models/container/container-exterior-back.glb"
  );
  const { nodes: cLeftNodes } = useGLTF(
    "/models/container/container-exterior-left.glb"
  );
  const { nodes: dRightNodes } = useGLTF("/models/drywall/drywall-right.glb");
  const { nodes: dLeftNodes } = useGLTF("/models/drywall/drywall-left.glb");
  const { nodes: dBackNodes } = useGLTF("/models/drywall/drywall-back.glb");

  const { nodes: pRightNodes } = useGLTF("/models/plywood/plywood-right.glb");
  const { nodes: pLeftNodes } = useGLTF("/models/plywood/plywood-left.glb");
  const { nodes: pBackNodes } = useGLTF("/models/plywood/plywood-back.glb");

  const csg = useRef();
  const { materials: containerMaterials } = useGLTF(
    "/models/container/container.glb"
  );
  const { materials: exteriorMaterials } = useGLTF("/models/container/exterior.glb");

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
              material={containerMaterials.White_Drywall_Wall}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={dRightNodes.mesh_0.geometry}
              material={containerMaterials.White_Drywall_Wall}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={dLeftNodes.mesh_0.geometry}
              material={containerMaterials.White_Drywall_Wall}
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
              material={containerMaterials.Plywood_Texture_01}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={pRightNodes.mesh_0.geometry}
              material={containerMaterials.Plywood_Texture_01}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
            <Base
              geometry={pLeftNodes.mesh_0.geometry}
              material={containerMaterials.Plywood_Texture_01}
              scale={10}
              position={[adjustForX, 0, adjustForY]}
            />
          </>
          ) : null
        }
        <Base
          geometry={cRightNodes.mesh_0.geometry}
          material={exteriorMaterials["Green"]}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={cBackNodes.mesh_0.geometry}
          material={exteriorMaterials["Green"]}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={cLeftNodes.mesh_0.geometry}
          material={exteriorMaterials["Green"]}
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
