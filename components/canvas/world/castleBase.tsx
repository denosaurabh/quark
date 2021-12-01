import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['world_export-8_1']: THREE.Mesh
    ['world_export-8_2']: THREE.Mesh
  }
  materials: {
    ['world_export-8 #1']: THREE.MeshStandardMaterial
    ['world_export-8 #254']: THREE.MeshStandardMaterial
  }
}

export default function CastleBase(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    'models/world/castle_base.glb'
  ) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[214.18, -4.6, 9.32]}>
        <mesh
          geometry={nodes['world_export-8_1'].geometry}
          material={materials['world_export-8 #1']}
        />
        <mesh
          geometry={nodes['world_export-8_2'].geometry}
          material={materials['world_export-8 #254']}
        />
      </group>
    </group>
  )
}

// useGLTF.preload('/castle_base.glb')
