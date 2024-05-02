
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { adjustForX, adjustForY } from '@/utils/3D/utils'

export function TestDoor(props) {
  const { nodes, materials } = useGLTF('/models/test.glb')
  return (
    <group scale={[10, 10, 10]} position={[adjustForX, 0, adjustForY]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/models/test.glb')
