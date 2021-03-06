/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { Billboard, useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import BillBoard from '@/components/billboard'

type GLTFResult = GLTF & {
  nodes: {
    castle_floor_voxel_white_export_1: THREE.Mesh
    castle_floor_voxel_white_export_2: THREE.Mesh
  }
  materials: {
    ['castle_floor_voxel_white_export #249']: THREE.MeshBasicMaterial
    ['castle_floor_voxel_white_export #242']: THREE.MeshBasicMaterial
  }
}

export default function CastleBase(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    'models/world/castle_floor_com.glb'
  ) as GLTFResult
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[214, -5, 89]}
      name='castle-bottom'
    >
      {/* <mesh
        geometry={nodes.castle_floor_voxel_white_export_1.geometry}
        material={materials['castle_floor_voxel_white_export #249']}
        name='castle-bottom'
      />
      <mesh
        geometry={nodes.castle_floor_voxel_white_export_2.geometry}
        material={materials['castle_floor_voxel_white_export #242']}
        name='castle-bottom'
      /> */}
      <mesh
        geometry={nodes.castle_floor_voxel_white_export.geometry}
        material={materials['castle_floor_voxel_white_export #249']}
        name='castle-bottom'
      />

      <BillBoard position={[40, -50, -40]}>Welcome to the world</BillBoard>
    </group>
  )
}

// // useGLTF.preload('/castle_floor.glb')
