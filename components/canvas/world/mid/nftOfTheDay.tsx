import { useEffect, useRef, useState } from 'react'
import { ethers } from 'ethers'
import axios from 'axios'
import Web3Modal from 'web3modal'
import NFTComp from '@/components/nft'

import { nftAddress, nftMarketAddress } from '@/nftConfig'

import NFT from '@/artifacts/contracts/NFT.sol/NFT.json'
import Market from '@/artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import useHUD from '@/store/huds/main'
import useBuyNFT from '@/store/huds/buyNFT'
import useCharacter from '@/store/character'

// let rpcEndpoint = 'http://localhost:8545'

// console.log(process.env.NEXT_PUBLIC_WORKSPACE_URL)
// if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
//   rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
// }

const NFTOftheDay = () => {
  const [nft, setNFT] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://matic-mumbai.chainstacklabs.com'
    )

    const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(
      nftMarketAddress,
      Market.abi,
      provider
    )
    const data = await marketContract.fetchMarketItems()

    const tokenUri = await tokenContract.tokenURI(data[0].tokenId)
    const meta = await axios.get(tokenUri)
    const price = ethers.utils.formatUnits(data[0].price.toString(), 'ether')

    let nftObj = {
      tokenId: data[0].tokenId.toNumber(),
      price,
      image: meta?.data?.image,
      name: meta.data.name,
      description: meta.data.description,
      owner: data[0].owner,
    }

    // console.log(nftObj)

    setNFT(nftObj)
    setIsLoading(false)
  }

  const buyNFT = async (nft) => {
    try {
      const web3modal = new Web3Modal()
      const connection = await web3modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)

      const signer = provider.getSigner()
      const contract = new ethers.Contract(nftMarketAddress, Market.abi, signer)

      const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
      console.log(nft.tokenId, price, nftAddress)

      const transaction = await contract.createMarketSale(
        nftAddress,
        nft.tokenId,
        { value: price }
      )

      await transaction.wait()
    } catch (err) {
      console.log(err)
      useHUD.getState().setCurrentHud('default')
      useCharacter.getState().setCanMove(true)
    } finally {
      loadNFTs()

      useHUD.getState().setCurrentHud('default')
      useCharacter.getState().setCanMove(true)
    }
  }

  const NFTClickHandler = async (nft) => {
    // const { tokenId, price, image, name, description, owner } = nft
    // buyNFT(nft)

    const { setCurrentHud } = useHUD.getState()
    setCurrentHud('buyNFT')
    useBuyNFT.getState().setNFTInfo(nft)

  }

  useEffect(() => {
    loadNFTs()
  }, [])

  const { isSubmitted, setSubmitted } = useBuyNFT(
    ({ isSubmitted, setSubmitted }) => ({ isSubmitted, setSubmitted })
  )

  useEffect(() => {
    if (isSubmitted) {
      buyNFT(useBuyNFT.getState().nftInfo)
      setSubmitted(false)
    }
  }, [isSubmitted])

  return (
    <group dispose={null}>
      {!isLoading && nft ? (
        <NFTComp
          {...nft}
          position={[-10, -30, 20]}
          onClick={async () => {
            console.log('clicked nft of day')
            await NFTClickHandler(nft)
          }}
        />
      ) : null}

      {/* <mesh position={[-5, -30, 25]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh> */}
    </group>
  )
}

export default NFTOftheDay
