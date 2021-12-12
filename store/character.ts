import create from 'zustand'
import produce from 'immer'
import { nanoid } from 'nanoid'

interface CharacterState {
  id: string
  canMove: boolean
  moveForward: boolean
  mouseDegree: number
  currentChunk: string
  setMoveForward: (val: boolean) => void
  setCanMove: (canMove: boolean) => void
  setMouseDegree: (mouseDegree: number) => void
  setCurrentChunk: (chunk: string) => void
}

const useCharacter = create<CharacterState>((set) => {
  return {
    id: nanoid(),
    canMove: false,
    moveForward: false,
    mouseDegree: 0,
    currentChunk: 'castle-bottom',
    setMoveForward: (val: boolean) => {
      set(
        produce((state) => {
          state.moveForward = val
        })
      )
    },
    setCanMove: (val) => {
      set(
        produce((state) => {
          state.canMove = val
        })
      )
    },
    setMouseDegree: (val) => {
      set(
        produce((state) => {
          state.mouseDegree = val
        })
      )
    },
    setCurrentChunk: (newChunk) => {
      set(
        produce((state) => {
          state.currentChunk = newChunk
        })
      )
    },
  }
})

export default useCharacter

// useCharacter.subscribe((state: CharacterState) => {
//   // console.log(state.mouseDegree)
// })
