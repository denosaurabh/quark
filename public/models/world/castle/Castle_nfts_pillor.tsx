/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['more_nfts_voxel_final-7_1']: THREE.Mesh
    ['more_nfts_voxel_final-7_2']: THREE.Mesh
    ['more_nfts_voxel_final-7_3']: THREE.Mesh
  }
  materials: {
    ['more_nfts_voxel_final-7 #249']: THREE.MeshBasicMaterial
    ['more_nfts_voxel_final-7 #250']: THREE.MeshBasicMaterial
    ['more_nfts_voxel_final-7 #242']: THREE.MeshBasicMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/castle_nfts_pillor.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['more_nfts_voxel_final-7_1'].geometry}
        material={materials['more_nfts_voxel_final-7 #249']}
      />
      <mesh
        geometry={nodes['more_nfts_voxel_final-7_2'].geometry}
        material={materials['more_nfts_voxel_final-7 #250']}
      />
      <mesh
        geometry={nodes['more_nfts_voxel_final-7_3'].geometry}
        material={materials['more_nfts_voxel_final-7 #242']}
      />
    </group>
  )
}

useGLTF.preload('/castle_nfts_pillor.glb')