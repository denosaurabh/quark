import create from 'zustand'
import produce from 'immer'

interface BuyNFTHudState {
  nftInfo: Record<string, unknown>
  isSubmitted: boolean
  setNFTInfo: (info) => void
  setSubmitted: (submitted: boolean) => void
}

const useBuyNFT = create<BuyNFTHudState>((set) => {
  return {
    nftInfo: {},
    isSubmitted: false,
    setNFTInfo: (info) => {
      set(
        produce((state) => {
          state.nftInfo = info
        })
      )
    },
    setSubmitted: (value) => {
      set(
        produce((state) => {
          state.isSubmitted = value
        })
      )
    },
  }
})

export default useBuyNFT
