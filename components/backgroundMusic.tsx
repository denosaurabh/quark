import { useLoader, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const BackgroundMusic = () => {
  // const sound = useRef()
  const { camera } = useThree()
  const listener = new THREE.AudioListener()
  camera.add(listener)

  const sound = new THREE.Audio(listener)

  // useEffect(() => {
  // load a sound and set it as the Audio object's buffer

  const audioLoader = new THREE.AudioLoader()
  audioLoader.load('audio/ea-ashkira-place-of-light-432-hz.mp3', (buffer) => {
    sound.setBuffer(buffer)
    sound.setLoop(true)
    sound.setVolume(0.5)
    sound.play()
  })
  // }, [])

  // const [listener] = useState(() => new THREE.AudioListener())
  // const buffer = useLoader(
  //   THREE.AudioLoader,
  //   'audio/ea-ashkira-place-of-light-432-hz.mp3'
  // )

  // useEffect(() => {
  //   sound.current.setBuffer(buffer)
  //   sound.current.setRefDistance(1)
  //   sound.current.setLoop(true)
  //   sound.current.play()

  //   camera.add(listener)

  //   return () => camera.remove(listener)
  // }, [])

  // return <positionalAudio ref={sound} args={[listener]}></positionalAudio>
  return <></>
}

export default BackgroundMusic
