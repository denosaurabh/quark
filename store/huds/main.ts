import create from 'zustand'
import produce from 'immer'

type HUD = 'default' | 'createNFT' | 'buyNFT'

interface CreateHUDState {
  currentHud: HUD
  showHud: boolean
  setCurrentHud: (hud: HUD) => void
  setShowHud: (val: boolean) => void
}

const useHUD = create<CreateHUDState>((set) => {
  return {
    currentHud: 'default',
    showHud: true,
    setCurrentHud: (hud) =>
      set(
        produce((state) => {
          state.currentHud = hud
        })
      ),

    setShowHud: (val) =>
      set(
        produce((state) => {
          state.showHud = val
        })
      ),
  }
})

export default useHUD
