import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import {
  ArrowHelperProps,
  RaycasterProps,
  useFrame,
  useThree,
} from '@react-three/fiber'
import useCharacter from '@/store/character'
import useLoad from '@/store/load'

const CollisionSystem = ({ ...props }) => {
  const aheadRaycastRef = useRef<RaycasterProps>()
  const downRaycastRef = useRef<RaycasterProps>()

  const arrowHelperRef = useRef<ArrowHelperProps>()

  const [mouseDegree, setMouseDegree] = useState(0)
  // const { mouse, scene: threeScene } = useThree()
  const chracRef = useRef<THREE.Mesh>()
  // const characterRef = threeScene.getObjectByName('character')
  // if (characterRef) {
  //   console.log(
  //     characterRef.position.x,
  //     characterRef.position.y + 1,
  //     characterRef.position.z
  //   )
  // }

  // const { x, y } = mouse
  // const mouseDegree = Math.atan2(y, x)

  useFrame(({ scene, mouse }) => {
    const { x, y } = mouse
    const mouseDeg = Math.atan2(y, x)
    // setMouseDegree(mouseDeg)

    const objs = scene.getObjectByName('world')?.children
    // console.log(objs)

    // console.log(objs)
    let collidesData = []

    const character = scene.getObjectByName('character')
    // chracRef.current = character

    // console.log(
    //   character.position.x,
    //   character.position.y,
    //   character.position.z
    // )

    // if (aheadRaycastRef.current) {
    //   // console.log(aheadRaycastRef.current)

    //   // aheadRaycastRef.current.args = [
    //   //   character?.getWorldPosition(character?.position),
    //   //   new THREE.Vector3(1, 0, 0)
    //   //     .applyAxisAngle(new THREE.Vector3(0, 1, 0), mouseDeg - 0.7)
    //   //     .normalize(),
    //   // ]

    //   aheadRaycastRef.current.set(
    //     character?.getWorldPosition(character?.position),
    //     new THREE.Vector3(1, 0, 0)
    //       .applyAxisAngle(new THREE.Vector3(0, 1, 0), mouseDeg - 0.7)
    //       .normalize()
    //   )

    //   const intersectsAhead = aheadRaycastRef.current.intersectObjects(
    //     objs,
    //     true
    //   )

    //   if (intersectsAhead && intersectsAhead.length) {
    //     const closestBase = intersectsAhead.reduce((fir, sec) => {
    //       return fir.distance < sec.distance ? fir : sec
    //     }, [])

    //     if (closestBase.distance < 1) {
    //       console.log('colliding')
    //       collidesData = [...collidesData, 'ahead']

    //       useCharacter.getState().setCanMove(false)
    //     } else {
    //       const removedCollides = collidesData.filter((el) => el !== 'left')
    //       collidesData = removedCollides

    //       useCharacter.getState().setCanMove(true)
    //     }
    //   }
    // }

    if (downRaycastRef.current && objs) {
      // downRaycastRef.current.args = [
      //   character?.getWorldPosition(character?.position),
      //   new THREE.Vector3(0, -1000, 0).normalize(),
      // ]

      // console.log(
      //   character?.getWorldPosition(character?.position),
      //   'down ray cast'
      // )

      try {
        downRaycastRef.current.set(
          character?.getWorldPosition(character?.position),
          new THREE.Vector3(0, -1000, 0).normalize()
        )
      } catch (e) {
        console.log(e)
      }

      // console.log('setting downraycast')

      const intersectsDown = downRaycastRef.current.intersectObjects(objs, true)

      if (intersectsDown.length) {
        const closestBase = intersectsDown.reduce((fir, sec) => {
          return fir.distance < sec.distance ? fir : sec
        })

        // console.log(closestBase)

        if (closestBase?.object?.name) {
          const currentChunk = useCharacter.getState().currentChunk

          // console.log(currentChunk)

          // console.log(
          //   closestBase.object.name,
          //   closestBase.object.name === currentChunk
          // )

          if (currentChunk !== closestBase?.object?.name) {
            console.log('another chunk')
            useCharacter.getState().setCurrentChunk(closestBase?.object?.name)

            if (closestBase?.object?.name !== 'castle') {
              const currentChunkLoc = useLoad
                .getState()
                .chunkIndex(closestBase?.object?.name)
              useLoad.getState().loadNeighbourChunks(currentChunkLoc)
            }
          }

          // console.log('close')

          // useCharacter.getState().setCurrentChunk()
        }

        // console.log(closestBase.distance)
        // console.log(character.position.y - closestBase.distance - 1 < -76)
        character.position.y -= closestBase.distance - 1

        // if (character.position.y - closestBase.distance - 1 < -75) {
        //   character.position.y = -75
        // } else {
        //   character.position.y -= closestBase.distance - 1
        // }
      }
    }

    // if (arrowHelperRef.current) {
    //   // console.log(arrowHelperRef.current)

    //   // console.log(
    //   //   character.position.x,
    //   //   character.position.y + 1,
    //   //   character.position.z
    //   // )

    //   // arrowHelperRef.current.setDirection(
    //   //   new THREE.Vector3(1, 0, 0)
    //   //     .applyAxisAngle(new THREE.Vector3(0, 1, 0), mouseDegree - 0.7)
    //   //     .normalize()
    //   // )

    //   // arrowHelperRef.current.position.set(
    //   //   new THREE.Vector3(
    //   //     character.position.x,
    //   //     character.position.y + 1,
    //   //     character.position.z
    //   //   )
    //   // )

    //   // arrowHelperRef.current.setLength(1000)
    //   // arrowHelperRef.current.setColor(0xffff00)

    //   arrowHelperRef.current.position.set(character.position)
    //   arrowHelperRef.current.rotation.set(
    //     new THREE.Vector3(1, 0, 0)
    //       .applyAxisAngle(new THREE.Vector3(0, 1, 0), mouseDeg - 0.7)
    //       .normalize()
    //   )
    //   // )
    // }
  })

  useEffect(() => {
    console.log('collidion system refresh')
  }, [])

  return (
    <group dispose={null} {...props}>
      {/* <arrowHelper
        ref={arrowHelperRef}
        args={[
          new THREE.Vector3(1, 0, 0)
            .applyAxisAngle(new THREE.Vector3(0, 1, 0), mouseDegree - 0.7)
            .normalize(),
          new THREE.Vector3(0, 0, 0),
          1000,
          0xffff00,
        ]}
      /> */}
      {/* <arrowHelper
        ref={arrowHelperRef}
        hex={0xffff00}
        length={1000}
        args={[
          new THREE.Vector3(0, -100, 0).normalize(),
          new THREE.Vector3(100, 100, 100),
        ]}
      /> */}
      <raycaster
        args={[
          chracRef.current?.getWorldPosition(chracRef.current?.position),
          new THREE.Vector3(1, 0, 0)
            .applyAxisAngle(new THREE.Vector3(0, 1, 0), mouseDegree - 0.7)
            .normalize(),
        ]}
        ref={aheadRaycastRef}
        id='character-ahead-ray'
        userData={{ id: 'character-ahead-ray' }}
      />

      <raycaster
        args={[
          chracRef.current?.getWorldPosition(chracRef.current?.position),
          new THREE.Vector3(0, -1000, 0).normalize(),
        ]}
        ref={downRaycastRef}
        id='character-down-ray'
        userData={{ id: 'character-down-ray' }}
        onUpdate={() => {
          console.log('down raycast updated')
        }}
      />
    </group>
  )
}

export default CollisionSystem
