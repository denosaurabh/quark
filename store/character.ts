import create from 'zustand'
import produce from 'immer'
import { nanoid } from 'nanoid'

interface CharacterState {
  id: string
  canMove: boolean
  moveForward: boolean
  mouseDegree: number
  setMoveForward: (val: boolean) => void
  setCanMove: (canMove: boolean) => void
  setMouseDegree: (mouseDegree: number) => void
}

const useCharacter = create<CharacterState>((set) => {
  return {
    id: nanoid(),
    canMove: true,
    moveForward: false,
    mouseDegree: 0,
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
  }
})

export default useCharacter

useCharacter.subscribe((state: CharacterState) => {
  // console.log(state.mouseDegree)
})
