import { Suspense, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { DRACOLoader, GLTF } from 'three-stdlib'
import { GroupProps, useGraph } from '@react-three/fiber'
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
}

const NFT = ({
  price,
  tokenId,
  seller,
  owner,
  sold,
  image,
  position,
}: NFTProps) => {
  const modelRef = useRef<GroupProps>(null)
  const { setCanMove } = useCharacter(({ setCanMove }) => ({ setCanMove }))
  const model = useGLTF(image)

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

  return (
    <group ref={modelRef} position={position}>
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
