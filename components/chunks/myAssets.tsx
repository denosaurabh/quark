/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['level2-export-0_1']: THREE.Mesh
    ['level2-export-0_2']: THREE.Mesh
    ['level2-export-0_3']: THREE.Mesh
    ['level2-export-0_4']: THREE.Mesh
    ['level2-export-0_5']: THREE.Mesh
    ['level2-export-0_6']: THREE.Mesh
    ['level2-export-0_7']: THREE.Mesh
  }
  materials: {
    floor: THREE.MeshBasicMaterial
    wall: THREE.MeshBasicMaterial
    ['piller-base']: THREE.MeshBasicMaterial
    ['box-base-grey']: THREE.MeshBasicMaterial
    ['box-base-orange']: THREE.MeshBasicMaterial
    box: THREE.MeshBasicMaterial
    piller: THREE.MeshBasicMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/level2-mid.glb') as GLTFResult

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      name='world'
      position={[164, -50, 0]}
      rotation={[0, 4.4, 0]}
    >
      <group position={[43.68, 49.08, 0.24]}>
        <mesh
          geometry={nodes['level2-export-0_1'].geometry}
          material={materials.floor}
        />
        <mesh
          geometry={nodes['level2-export-0_2'].geometry}
          material={materials.wall}
        />
        <mesh
          geometry={nodes['level2-export-0_3'].geometry}
          material={materials['piller-base']}
        />
        <mesh
          geometry={nodes['level2-export-0_4'].geometry}
          material={materials['box-base-grey']}
        />
        <mesh
          geometry={nodes['level2-export-0_5'].geometry}
          material={materials['box-base-orange']}
        />
        <mesh
          geometry={nodes['level2-export-0_6'].geometry}
          material={materials.box}
        />
        <mesh
          geometry={nodes['level2-export-0_7'].geometry}
          material={materials.piller}
        />
      </group>
    </group>
  )
}

// useGLTF.preload('/level2-compressed.glb')
