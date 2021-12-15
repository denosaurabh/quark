import * as THREE from 'three'
import { useState, useRef } from 'react'
import { ethers } from 'ethers'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { nftAddress, nftMarketAddress } from '@/nftConfig'

import NFT from '@/artifacts/contracts/NFT.sol/NFT.json'
import Market from '@/artifacts/contracts/NFTMarket.sol/NFTMarket.json'

type GLTFResult = GLTF & {
  nodes: {
    ['voxel_map_level1-export-union_1']: THREE.Mesh
    ['voxel_map_level1-export-union_2']: THREE.Mesh
    ['voxel_map_level1-export-union_3']: THREE.Mesh
    ['voxel_map_level1-export-union_4']: THREE.Mesh
    ['voxel_map_level1-export-union_5']: THREE.Mesh
    ['voxel_map_level1-export-union_6']: THREE.Mesh
    ['voxel_map_level1-export-union_7']: THREE.Mesh
    ['voxel_map_level1-export-union_8']: THREE.Mesh
    ['voxel_map_level1-export-union_9']: THREE.Mesh
  }
  materials: {
    floor: THREE.MeshBasicMaterial
    ['box-base-grey']: THREE.MeshBasicMaterial
    ['box-base-orange']: THREE.MeshBasicMaterial
    ['carpet-grey']: THREE.MeshBasicMaterial
    wall: THREE.MeshBasicMaterial
    ['piller-base']: THREE.MeshBasicMaterial
    ['carpet-outline']: THREE.MeshBasicMaterial
    piller: THREE.MeshBasicMaterial
    box: THREE.MeshBasicMaterial
  }
}

const NFTsChunk = ({ ...props }: JSX.IntrinsicElements['group']) => {
  const buyNFTsGeoRef = useRef<THREE.Mesh>()
  const [nfts, setNfts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(
      nftMarketAddress,
      Market.abi,
      provider
    )
    const data = await marketContract.fetchMarketItems()

    const items = await Promise.all(
      data.map(async (item) => {
        const tokenUri = await tokenContract.tokenURI(item.tokenId)
        const meta = await axios.get(tokenUri)
        const price = ethers.utils.formatUnits(item.price.toString(), 'ether')

        let itemObj = {
          id: item.tokenId,
          price,
          image: meta?.data?.image,
          name: meta.data.name,
          description: meta.data.description,
          owner: item.owner,
        }

        return itemObj
      })
    )

    setNfts(items)
    setIsLoading(false)
  }

  const buyNFT = async (nft) => {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)

    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftAddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')

    const transaction = await contract.createMarketSale(
      nftAddress,
      nft.tokenId,
      { value: price }
    )
    await transaction.wait()
    loadNFTs()
  }

  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/level1-mid.glb') as GLTFResult

  // Object.values(nodes).forEach((node) => {
  //   useBVH(node.material)
  //   useHelper(node.material, MeshBVHVisualizer)
  // })

  return (
    <>
      <group
        ref={group}
        {...props}
        dispose={null}
        name='world'
        position={[0, 0, 0]}
        rotation={[0, 4.4, 0]}
      >
        <mesh
          ref={buyNFTsGeoRef}
          geometry={nodes['voxel_map_level1-export-union_1'].geometry}
          material={materials.floor}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_2'].geometry}
          material={materials['box-base-grey']}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_3'].geometry}
          material={materials['box-base-orange']}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_4'].geometry}
          material={materials['carpet-grey']}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_5'].geometry}
          material={materials.wall}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_6'].geometry}
          material={materials['piller-base']}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_7'].geometry}
          material={materials['carpet-outline']}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_8'].geometry}
          material={materials.piller}
        />
        <mesh
          geometry={nodes['voxel_map_level1-export-union_9'].geometry}
          material={materials.box}
        />
      </group>

      <mesh
        position={[
          group.current?.position.x + 50,
          group.current?.position.y + 20,
          group.current?.position.z + -7,
        ]}
      >
        <boxGeometry attach='geometry' args={[10, 10, 10]} />
        <meshBasicMaterial attach='material' color='red' />
      </mesh>
    </>
  )
}

// // useGLTF.preload('/level1-com.glb')

export default NFTsChunk
