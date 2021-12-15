import create from 'zustand'
import produce from 'immer'
import { nanoid } from 'nanoid'

interface CharacterState {
  id: string
  name: string
  canMove: boolean
  moveForward: boolean
  mouseDegree: number
  currentChunk: string
  lobby: string
  setMoveForward: (val: boolean) => void
  setCanMove: (canMove: boolean) => void
  setMouseDegree: (mouseDegree: number) => void
  setCurrentChunk: (chunk: string) => void
  setName: (newName: string) => void
  setLobby: (newLobby: string) => void
}

const useCharacter = create<CharacterState>((set) => {
  return {
    id: nanoid(),
    name: 'anonymous',
    canMove: true,
    moveForward: false,
    mouseDegree: 0,
    currentChunk: 'castle',
    lobby: 'main',
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
    setName: (newName) => {
      set(
        produce((state) => {
          state.name = newName
        })
      )
    },
    setLobby: (newLobby) => {
      set(
        produce((state) => {
          state.lobby = newLobby
        })
      )
    },
  }
})

export default useCharacter

// useCharacter.subscribe((state: CharacterState) => {
//   // console.log(state.mouseDegree)
// })
