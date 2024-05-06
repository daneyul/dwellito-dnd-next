import React, { useMemo, useRef } from "react";
import { PivotControls, useGLTF } from "@react-three/drei";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import { BoxGeometry } from "three";

export function Test({ color, doorBoundingBoxes }) {
  const { nodes: rightNodes } = useGLTF("/models/right.glb");
  const { nodes: backNodes } = useGLTF("/models/back.glb");
  const { nodes: leftNodes } = useGLTF("/models/left.glb");
  const csg = useRef();
  const material = new MeshStandardMaterial({ color: color });

  const boundingBoxGeometries = useMemo(() => {
    return Object.entries(doorBoundingBoxes).map(([id, bbox]) => (
      <group key={id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
        <Subtraction>
          {/* Geometry with bounding box size */}
          <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          <mesh>
            {/* Material applied to a mesh, not directly in Subtraction */}
            <meshStandardMaterial attach="material" color="white" side={THREE.DoubleSide} />
          </mesh>
        </Subtraction>
      </group>
    ));
  }, [doorBoundingBoxes]);

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        <Base
          geometry={rightNodes.mesh_0.geometry}
          material={material}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={backNodes.mesh_0.geometry}
          material={material}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={leftNodes.mesh_0.geometry}
          material={material}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        {boundingBoxGeometries}
      </Geometry>
    </mesh>
  );
}
useGLTF.preload("/models/container.glb");
