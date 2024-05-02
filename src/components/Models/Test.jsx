
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { adjustForX, adjustForY } from '@/utils/3D/utils'

export function Test(props) {
  const { nodes, materials } = useGLTF('/models/asdf.glb')
  return (
    <group scale={[10, 10, 10]} position={[adjustForX, 0, adjustForY]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={nodes.mesh_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2.geometry}
        material={nodes.mesh_2.material}
      />
    </group>
  )
}

useGLTF.preload('/models/asdf.glb')

