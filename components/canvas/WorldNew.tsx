/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'

import CastleBase from '@/components/canvas/world/castleBase'
import MidTopLeft from '@/components/canvas/world/mid/topLeft'
import MidTopRight from '@/components/canvas/world/mid/topRight'
import MidBottomRight from '@/components/canvas/world/mid/bottomRight'
import MidBottomLeft from '@/components/canvas/world/mid/bottomLeft'

import UserBottomLeft from '@/components/canvas/world/user/User_bottom_left'
import UserBottomRight from '@/components/canvas/world/user/User_bottom_right'
import UserTopLeft from '@/components/canvas/world/user/User_top_left'
import UserTopRight from '@/components/canvas/world/user/User_top_right'
import UserUpload from '@/components/canvas/world/user/User_upload'

import CastleEnterLeft from '@/components/canvas/world/castle/Castle_enter_left'
import CastleEnterRight from '@/components/canvas/world/castle/Castle_enter_right'
import CastlePillorBottomLeft from '@/components/canvas/world/castle/Castle_pillor_bottom_left'
import CastlePillorBottomRight from '@/components/canvas/world/castle/Castle_pillor_bottom_right'
import CastlePillorThroneLeft from '@/components/canvas/world/castle/Castle_pillor_throne_left'
import CastlePillorThroneRight from '@/components/canvas/world/castle/Castle_pillor_throne_right'
import CastlePillorTopLeft from '@/components/canvas/world/castle/Castle_pillor_top_left'
import CastlePillorTopRight from '@/components/canvas/world/castle/Castle_pillor_top_right'
import CastleNFTs from '@/components/canvas/world/castle/castleNFts'
import { useBVH, useHelper } from '@react-three/drei'
import { MeshBVHVisualizer } from 'three-mesh-bvh'

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()

  return (
    <group ref={group} {...props} dispose={null}>
      <CastleBase />

      <MidTopLeft />
      <MidTopRight />
      <MidBottomLeft />
      <MidBottomRight />

      <UserBottomLeft />
      <UserBottomRight />
      <UserTopLeft />
      <UserTopRight />
      <UserUpload />

      <CastleEnterLeft />
      <CastleEnterRight />
      <CastlePillorBottomLeft />
      <CastlePillorBottomRight />
      <CastlePillorThroneLeft />
      <CastlePillorThroneRight />
      <CastlePillorTopLeft />
      <CastlePillorTopRight />

      <CastleNFTs />
    </group>
  )
}

// useGLTF.preload('models/world.glb')
