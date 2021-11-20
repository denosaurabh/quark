import create from 'zustand'

interface CharacterState {
  position: [number, number, number]
  setPosition: (newPosition: [number, number, number]) => void
}

const useCharacter = create<CharacterState>((set) => {
  return {
    position: [0, 5, 0],
    setPosition: (newPos) => set(() => ({ position: newPos })),
  }
})

export default useCharacter
