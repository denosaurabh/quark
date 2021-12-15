import { useFrame, useThree } from '@react-three/fiber'
import useCharacter from '@/store/character'
import { ref, remove, set, update, get, child } from 'firebase/database'
import { db } from '@/firebase/init'
import { chunkIndex, chunksData } from '@/utils/chunksLoad'
import * as THREE from 'three'
import { useEffect } from 'react'

const RealTimeData = () => {
  let target = new THREE.Vector3()

  const { scene, mouse } = useThree()

  // useFrame(({ mouse, scene }) => {
  //   const { x, y } = mouse
  //   const mouseDegree = Math.atan2(y, x)

  //   const char = scene.getObjectByName('character')
  //   char.getWorldPosition(target)

  //   console.log(target)

  //   // set(ref(db, `lobbies/${lobby}/users/${name}`), {
  //   //   name,
  //   //   mouseDegree: mouseDegree + mouseDegreeOffset,
  //   //   moveForward,
  //   //   canMove,
  //   // })
  // }, -1)

  useEffect(() => {
    console.log('pushing data, rerender')
    const { lobby, id } = useCharacter.getState()
    // update(ref(db, `lobbies/${lobby}/users/*`), null)

    const dbRef = ref(db)
    get(child(dbRef, `lobbies/${lobby}/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val())

          const allPlayers = snapshot.val()
          // console.log(allPlayers, 'get once')

          Object.keys(allPlayers).map((uid) => {
            console.log('updating players', `lobbies/${lobby}/users/${uid}`)
            if (uid === id) return
            remove(ref(db, `lobbies/${lobby}/users/${uid}`))
          })
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })

    setInterval(() => {
      if (!window) return

      const { id, canMove, moveForward, name, lobby, currentChunk } =
        useCharacter.getState()

      const { x, y } = mouse
      const mouseDegree = Math.atan2(y, x)

      const chunkI = chunkIndex(currentChunk)
      const chunk = chunksData[chunkI[0]][chunkI[1]]
      const { mouseDegreeOffset } = chunk
        ? chunk
        : {
            mouseDegreeOffset: -0.7,
          }

      const char = scene.getObjectByName('character')
      if (!char) return
      char.getWorldPosition(target)

      // console.log(target)

      update(ref(db, `lobbies/${lobby}/users/${id}`), {
        id,
        name,
        mouseDegree: mouseDegree + mouseDegreeOffset,
        moveForward,
        canMove,
        position: target,
      })
    }, 50)

    // return () => {
    // const { lobby, id } = useCharacter.getState()
    // }
  }, [])

  return <></>
}

export default RealTimeData
