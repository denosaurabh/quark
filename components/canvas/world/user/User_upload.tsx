/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { ethers } from 'ethers'

import { Html, useGLTF } from '@react-three/drei'
import { create as IPFSHTTPClient } from 'ipfs-http-client'
import Web3Modal from 'web3modal'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import useHUD from '@/store/huds/main'
import useCreateNFT from '@/store/huds/createNFT'
import { nftAddress, nftMarketAddress } from '@/nftConfig'
import NFT from '@/artifacts/contracts/NFT.sol/NFT.json'
import Market from '@/artifacts/contracts/NFTMarket.sol/NFTMarket.json'

const client = IPFSHTTPClient({
  apiPath: '/api/v0',
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
})

type GLTFResult = GLTF & {
  nodes: {
    ['user_voxel-final-export-0_1']: THREE.Mesh
    ['user_voxel-final-export-0_2']: THREE.Mesh
  }
  materials: {
    ['user_voxel-final-export-0 #255']: THREE.MeshStandardMaterial
    ['user_voxel-final-export-0 #249']: THREE.MeshStandardMaterial
  }
}

export default function UserUpload(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    'models/world/user/user_upload.glb'
  ) as GLTFResult

  const [fileUrl, setFileUrl] = useState<string>('')
  const { setCurrentHud, setShowHud } = useHUD.getState()

  const { formInput, isSubmitted, setSubmitted } = useCreateNFT(
    ({ formInput, setSubmitted, isSubmitted }) => ({
      formInput,
      setSubmitted,
      isSubmitted,
    })
  )

  const createSale = async (url) => {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    console.log(url, nftAddress)
    let contract = new ethers.Contract(nftAddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    console.log(tx)

    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()

    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    // added this NFT on marketplace
    contract = new ethers.Contract(nftMarketAddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftAddress, tokenId, price, {
      value: listingPrice,
    })
    await transaction.wait()
  }

  const createNFT = async () => {
    const { price, name, description } = formInput
    if (!price || !name || !description) return

    console.log('saving file url:', fileUrl)
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    })

    console.log('data:', data, price, name, description)

    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`

      await createSale(url)
      setFileUrl('')
      setCurrentHud('default')
    } catch (err) {
      console.log(`Error uploading file: ${err}`)
    }
  }

  useEffect(() => {
    if (isSubmitted) {
      console.log('submitted')
      createNFT()
      setSubmitted(false)
    }
  }, [isSubmitted])

  const onModelDrop = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const files = e.dataTransfer.files
    console.log('files', files)

    const model = files[0]

    try {
      if (model) {
        const uploadedModel = await client.add(model, {
          progress: (num) => console.log(`uploaded: ${num}`),
        })

        const url = `https://ipfs.infura.io/ipfs/${uploadedModel.path}`
        console.log('uploaded file url:', url)

        setFileUrl(url)
      }

      setCurrentHud('createNFT')
      setShowHud(true)
    } catch (err) {
      console.log(`Error uploading file: ${err}`)
    }
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[213.21, -23.17, 424.99]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <Html
          as='div'
          prepend
          center
          fullscreen
          distanceFactor={10}
          zIndexRange={[100, 0]}
          transform
          onOcclude={(visible) => null}
          translateX={-100}
          scale={[8, 8, 8]}
          rotation={[1.57, 0, 0]}
          position={[43, 8, -12]}
        >
          <div
            style={{ width: '100px', height: '100px', backgroundColor: '#fff' }}
            onDragEnter={(e) => {
              console.log('drag enter', e)
            }}
            onDragOver={(e) => {
              e.preventDefault()
              e.stopPropagation()

              console.log('canvas drag over', e)
            }}
            onDrop={onModelDrop}
          ></div>
        </Html>

        <mesh
          geometry={nodes['user_voxel-final-export-0_1'].geometry}
          material={materials['user_voxel-final-export-0 #255']}
        />
        <mesh
          geometry={nodes['user_voxel-final-export-0_2'].geometry}
          material={materials['user_voxel-final-export-0 #249']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/world/user/user_upload.glb')
