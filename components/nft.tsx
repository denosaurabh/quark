import { Suspense, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { DRACOLoader, GLTF } from 'three-stdlib'
import { GroupProps, useFrame, useGraph } from '@react-three/fiber'
import useCharacter from '@/store/character'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface NFTProps {
  price: number | string
  tokenId: number
  seller: string
  owner: string
  sold: boolean
  image: string
  position: [number, number, number]
  onClick: () => void
}

const NFT = ({
  price,
  tokenId,
  seller,
  owner,
  sold,
  image,
  position,
  onClick,
}: NFTProps) => {
  const modelRef = useRef<GroupProps>(null)
  const model = useGLTF(image)

  const maxSize = new THREE.Vector3(10, 10, 10)

  const box = new THREE.Box3().setFromObject(model.scene)
  // console.log(box)

  const size = box.getSize(new THREE.Vector3())
  // console.log(size)

  // console.log(modelRef)

  useEffect(() => {
    if (modelRef.current) {
      const scale = new THREE.Vector3(
        maxSize.x / size.x,
        maxSize.y / size.y,
        maxSize.z / size.z
      )

      modelRef.current.scale.set(scale.x, scale.y, scale.z)
    }
  }, [modelRef])

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        Math.sin(clock.getElapsedTime()) * 5 + position[1]
      modelRef.current.rotation.y = clock.getElapsedTime()
    }
  })

  return (
    <group
      name={`nft-${tokenId}`}
      ref={modelRef}
      position={position}
      onClick={() => {
        onClick()
      }}
    >
      <primitive object={model.scene} />
    </group>
  )
}

export default NFT

// const { nodes: modelNodes, materials: modelMaterials } = model

// const { nodes, materials } = useGraph(model)
// console.log(nodes, materials)

// const gltfLoader = new GLTFLoader()
// const dracoloader = new DRACOLoader()
// dracoloader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
// gltfLoader.setDRACOLoader(dracoloader)

// const model = useLoader(gltfLoader, image)
// const { nodes, materials } = useGraph(model)
// console.log('NFT model', model, nodes, materials)

//  const { setCanMove } = useCharacter(({ setCanMove }) => ({ setCanMove }))

// useEffect(() => {
//   if (!modelRef.current) return
//   console.log(modelRef.current, 'clicked')

//   const box = new THREE.Box3().setFromObject(modelRef.current)

//   const size = new THREE.Vector3()
//   box.getSize(size)

//   var scaleVec = new THREE.Vector3(1, 1, 1).divide(size)
//   var scale = Math.min(scaleVec.x, Math.min(scaleVec.y, scaleVec.z))
//   modelRef.current.scale.setScalar(scale)
// }, [modelRef.current])
