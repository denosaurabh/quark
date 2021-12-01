/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['world_export-0_1']: THREE.Mesh
    ['world_export-0_2']: THREE.Mesh
  }
  materials: {
    ['world_export-0 #1']: THREE.MeshStandardMaterial
    ['world_export-0 #254']: THREE.MeshStandardMaterial
  }
}

export default function CastlePillorTopRight(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/world/castle/castle_pillor_top_right.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-566.99, 0, -66.67]}>
        <mesh geometry={nodes['world_export-0_1'].geometry} material={materials['world_export-0 #1']} />
        <mesh geometry={nodes['world_export-0_2'].geometry} material={materials['world_export-0 #254']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/world/castle/castle_pillor_top_right.glb')