import CastleNFTs from './world/castle/castleNFts'
import NFTOftheDay from './world/mid/nftOfTheDay'
import BoughtNFTs from './world/user/boughtNFTs'
import PublishedAssets from './world/user/publishedAssets'

const Marketplace = ({ ...props }) => {
  return (
    <group name='marketplace' {...props} dispose={null}>
      <BoughtNFTs />
      <CastleNFTs />
      <PublishedAssets />
      <NFTOftheDay />
    </group>
  )
}

export default Marketplace
