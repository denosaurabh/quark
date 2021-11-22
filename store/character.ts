import create from 'zustand'

interface CharacterState {
  canMove: boolean
  position: [number, number, number]
  setPosition: (newPosition: [number, number, number]) => void
  setCanMove: (canMove: boolean) => void
}

const useCharacter = create<CharacterState>((set) => {
  return {
    canMove: true,
    position: [0, 5, 0],
    setPosition: (newPos) => set(() => ({ position: newPos })),
    setCanMove: (canMove) => set(() => ({ canMove })),
  }
})

export default useCharacter
