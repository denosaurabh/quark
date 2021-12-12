import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

import { nftMarketAddress, nftAddress } from '@/nftConfig'

import NFT from '@/artifacts/contracts/NFT.sol/NFT.json'
import Market from '@/artifacts/contracts/NFTMarket.sol/NFTMarket.json'

import NFTComp from '@/components/nft'
import useNFT from '@/store/huds/nft'
import useHUD from '@/store/huds/main'

export default function BoughtNFTs(props: JSX.IntrinsicElements['group']) {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    loadNFTs()
  }, [])

  async function loadNFTs() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(
      nftMarketAddress,
      Market.abi,
      signer
    )
    const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId)
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        }

        return item
      })
    )

    console.log('bought items', items)

    setNfts(items)
    setLoadingState('loaded')
  }

  const nftPositions = [
    [-60, -55, 337],
    [-90, -55, 337],
    [-118, -55, 337],

    [-45, -55, 310],
    [-85, -55, 310],
    [-120, -55, 310],

    [-45, -55, 290],
    [-85, -55, 290],
    [-120, -55, 290],
  ]

  return (
    <group {...props} dispose={null}>
      {loadingState === 'loaded' && nfts
        ? nfts.map((el, i) => {
            return (
              <NFTComp
                position={nftPositions[i]}
                key={i}
                {...el}
                onClick={() => {
                  useNFT.getState().setNFTInfo(el)
                  useHUD.getState().setCurrentHud('nft')
                }}
              />
            )
          })
        : null}

      {/* <mesh position={[-60, -62, 337]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[-90, -62, 337]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-118, -62, 337]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-45, -62, 310]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[-85, -62, 310]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-120, -62, 310]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-45, -62, 290]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[-85, -62, 290]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[-120, -62, 290]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh> */}
    </group>
  )
}
