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

const CastleNFTs = () => {
  const [nfts, setNfts] = useState([])
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

    const items = await Promise.all(
      data.map(async (item) => {
        const tokenUri = await tokenContract.tokenURI(item.tokenId)
        const meta = await axios.get(tokenUri)
        const price = ethers.utils.formatUnits(item.price.toString(), 'ether')

        let itemObj = {
          tokenId: item.tokenId.toNumber(),
          price,
          image: meta?.data?.image,
          name: meta.data.name,
          description: meta.data.description,
          owner: item.owner,
        }

        return itemObj
      })
    )

    console.log(items, 'buy nfts')

    setNfts(items)
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
      useHUD.getState().setCurrentHud('default')
      useCharacter.getState().setCanMove(true)
    }

    loadNFTs()
  }

  const NFTClickHandler = async (nft) => {
    // const { tokenId, price, image, name, description, owner } = nft
    // buyNFT(nft)

    const { setCurrentHud } = useHUD.getState()

    setCurrentHud('buyNFT')

    useBuyNFT.getState().setNFTInfo(nft)

    // setCurrentHud('default')
  }

  useEffect(() => {
    loadNFTs()
  }, [])

  const { isSubmitted, setSubmitted } = useBuyNFT(
    ({ isSubmitted, setSubmitted }) => ({ isSubmitted, setSubmitted })
  )

  useEffect(() => {
    if (isSubmitted) {
      console.log('buy NFT submitted')

      buyNFT(useBuyNFT.getState().nftInfo)
      setSubmitted(false)
    }
  }, [isSubmitted])

  const NFTPositions = [
    [-377, -24, 71],
    [-377, -24, -51],
    [-420, -24, 71],
    [-420, -24, -51],
    [-465, -24, 71],
    [-465, -24, -51],
    [-536, -24, 71],
    [-536, -24, -51],
    [-570, -24, 71],
    [-570, -24, -51],
    [-617, -24, 71],
    [-617, -24, -51],
  ]

  return (
    <group dispose={null}>
      {!isLoading && nfts
        ? nfts.map((el, i) => {
            return (
              <NFTComp
                position={NFTPositions[i]}
                key={i}
                {...el}
                onClick={async () => {
                  console.log('clicked', el)
                  await NFTClickHandler(el)
                }}
              />
            )
          })
        : null}

      {/* <mesh position={[-377, -24, 71]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-377, -24, -51]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-420, -24, 71]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-420, -24, -51]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[-465, -24, 71]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-465, -24, -51]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-536, -24, 71]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-536, -24, -51]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-570, -24, 71]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-570, -24, -51]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-617, -24, 71]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[-617, -24, -51]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh> */}
    </group>
  )
}

export default CastleNFTs
