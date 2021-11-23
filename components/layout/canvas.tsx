import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Preload,
  OrthographicCamera,
  Stats,
  Html,
} from '@react-three/drei'
import {
  DepthOfField,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing'

import useStore from '@/store/store'
import useCharacter from '@/store/character'

import {
  computeBoundsTree,
  disposeBoundsTree,
  acceleratedRaycast,
} from 'three-mesh-bvh'

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree
THREE.Mesh.prototype.raycast = acceleratedRaycast

const LControl = () => {
  const dom = useStore((state) => state.dom)

  const characterPos = useCharacter(({ position }) => position)
  const characterPosV = new THREE.Vector3(
    characterPos[0],
    characterPos[1],
    characterPos[2]
  )

  const camera = useRef(null)
  const control = useRef(null)

  useEffect(() => {
    if (control.current) {
      dom.current.style['touch-action'] = 'none'
      control.current.enabled = true
    }
  }, [dom, control])
  // @ts-ignore
  return (
    <>
      <OrthographicCamera
        position={[100, 100, 100]}
        zoom={25}
        makeDefault
        ref={camera}
        near={0.001}
      />
      <OrbitControls
        camera={camera.current}
        domElement={dom.current}
        enablePan={false}
        enableRotate={false}
        mouseButtons={{
          LEFT: THREE.MOUSE.PAN,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.ROTATE,
        }}
        rotateSpeed={0.4}
        zoomSpeed={0.8}
        target={characterPosV}
      />
    </>
  )
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => {
        const { camera, raycaster } = state
        state.events.connect(dom.current)

        camera.layers.enableAll()
        // raycaster.layers.set(1)
      }}
    >
      <color attach='background' args={[0x343a40]} />

      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0.07}
          focalLength={0.02}
          bokehScale={2}
          // height={1000}
          // width={1000}
        />
        <Vignette eskil={false} offset={0.05} darkness={0.4} /> */}
      </EffectComposer>

      <Stats showPanel={0} className='stats' />

      {/* <HUD /> */}

      <LControl />
      <Preload all />
      <axesHelper scale={1000} />
      {children}
    </Canvas>
  )
}

export default LCanvas
