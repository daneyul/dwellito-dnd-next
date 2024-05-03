import React, { useMemo, useRef } from "react";
import {
  PivotControls,
  useGLTF,
} from "@react-three/drei";
import { adjustForX, adjustForY } from "@/utils/3D/utils";
import { Addition, Base, Geometry, Subtraction } from "@react-three/csg";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

export function Test({ color: color }) {
  const { nodes: nodes1 } = useGLTF("/models/wall.glb");
  const { nodes: nodes2 } = useGLTF("/models/test.glb");
  const csg = useRef();
  const material = new MeshStandardMaterial({ color: color });
  console.log(nodes2)

  const leftExtFace = useMemo(() => {
    const geometries = Object.values(nodes1).map(node => node.geometry.clone());
    return BufferGeometryUtils.mergeGeometries(geometries, false);
  }, [nodes1]);

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        <Base geometry={nodes2.mesh_0.geometry} material={material} scale={10} position={[adjustForX, 0, adjustForY]} />
        <PivotControls
          lineWidth={3}
          anchor={[0, 0, 0]}
          onDrag={() => csg.current.update()}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        >
          <group scale={10} position={[adjustForX, 0, adjustForY]}>
            <Subtraction>
              <boxGeometry />
              <meshStandardMaterial color="white" side={THREE.DoubleSide} />
            </Subtraction>
          </group>
        </PivotControls>
      </Geometry>
    </mesh>
  );
}
useGLTF.preload("/models/container.glb");