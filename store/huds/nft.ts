import create from 'zustand'
import produce from 'immer'

interface BuyNFTHudState {
  nftInfo: Record<string, unknown>
  setNFTInfo: (info) => void
}

const useNFT = create<BuyNFTHudState>((set) => {
  return {
    nftInfo: {},
    setNFTInfo: (info) => {
      set(
        produce((state) => {
          state.nftInfo = info
        })
      )
    },
  }
})

export default useNFT
