/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useBVH, useGLTF, useHelper } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import {
  computeBoundsTree,
  disposeBoundsTree,
  acceleratedRaycast,
  MeshBVHVisualizer,
} from 'three-mesh-bvh'

// Add the extension functions
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree
THREE.Mesh.prototype.raycast = acceleratedRaycast

type GLTFResult = GLTF & {
  nodes: {
    castle_voxel_save_white_export_1: THREE.Mesh
    castle_voxel_save_white_export_2: THREE.Mesh
  }
  materials: {
    ['castle_voxel_save_white_export #249']: THREE.MeshBasicMaterial
    ['castle_voxel_save_white_export #242']: THREE.MeshBasicMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const castleRef = useRef<THREE.Mesh>()

  useBVH(castleRef)
  // useHelper(castleRef, MeshBVHVisualizer)

  useEffect(() => {
    if (castleRef.current) {
      console.log(castleRef.current)

      castleRef.current.geometry.boundsTree.shapecast({
        intersectsBounds: (box) => {
          console.log(box, 'intersected box')
        },
        intersectsTriangle: (tri) => {
          // check if the triangle is intersecting the capsule and adjust the
          // capsule position if it is.

          console.log(tri, 'intersected tri')

          // const triPoint = tempVector
          // const capsulePoint = tempVector2

          // const distance = tri.closestPointToSegment(
          //   tempSegment,
          //   triPoint,
          //   capsulePoint
          // )
          // if (distance < capsuleInfo.radius) {
          //   const depth = capsuleInfo.radius - distance
          //   const direction = capsulePoint.sub(triPoint).normalize()

          //   tempSegment.start.addScaledVector(direction, depth)
          //   tempSegment.end.addScaledVector(direction, depth)
          // }
        },
      })
    }
  }, [, castleRef.current])

  const { nodes, materials } = useGLTF('models/castle-compressed.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null} name="world">
      <group position={[0, 1.38, 0]} name="world">
        <mesh
          ref={castleRef}
          geometry={nodes.castle_voxel_save_white_export_1.geometry}
          material={materials['castle_voxel_save_white_export #249']}
        />
        <mesh
          geometry={nodes.castle_voxel_save_white_export_2.geometry}
          material={materials['castle_voxel_save_white_export #242']}
        />
      </group>
    </group>
  )
}

// useGLTF.preload('models/castle-compressed.glb')
