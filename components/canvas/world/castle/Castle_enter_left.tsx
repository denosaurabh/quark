/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['more_nfts_voxel-6']: THREE.Mesh
    ['more_nfts_voxel-6_1']: THREE.Mesh
  }
  materials: {
    ['more_nfts_voxel-6 #249']: THREE.MeshBasicMaterial
    ['more_nfts_voxel-6 #242']: THREE.MeshBasicMaterial
  }
}

export default function CastleEnterLeft(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    'models/world/castle/castle_entry_left.glb'
  ) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-254.44, 0, 89.27]}>
        <mesh
          geometry={nodes['more_nfts_voxel-6'].geometry}
          material={materials['more_nfts_voxel-6 #249']}
        />
        <mesh
          geometry={nodes['more_nfts_voxel-6_1'].geometry}
          material={materials['more_nfts_voxel-6 #242']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/world/castle/castle_entry_left.glb')
