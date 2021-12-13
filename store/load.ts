export const chunksData = [
  [
    null,
    null,
    {
      name: 'throne-left',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
      load: false,
    },
    {
      name: 'throne-right',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
      load: false,
    },
  ],
  [
    null,
    null,
    {
      name: 'castle-pillor-top-left',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
      load: false,
    },
    {
      name: 'castle-pillor-top-right',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
      load: false,
    },
  ],
  [
    null,
    null,
    {
      name: 'castle-pillor-bottom-left',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
      load: false,
    },
    {
      name: 'castle-pillor-bottom-right',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
      load: false,
    },
  ],
  [
    null,
    null,
    {
      name: 'castle-enter-left',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
      load: false,
    },
    {
      name: 'castle-enter-right',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
      load: false,
    },
  ],
  [
    {
      name: 'user-bridge-portal',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
      load: false,
    },
    {
      name: 'user-portal',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
      load: false,
    },
    {
      name: 'palace-top-left',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
      load: false,
    },
    {
      name: 'palace-top-right',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
      load: false,
    },
  ],
  [
    {
      name: 'user-bridge-end',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
      load: false,
    },
    {
      name: 'user-enter',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
      load: true,
    },
    {
      name: 'palace-bottom-left',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
      load: true,
    },
    {
      name: 'palace-bottom-right',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
      load: true,
    },
  ],
  [
    {
      name: 'user-drop-model',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
      load: true,
    },
    null,
    {
      name: 'castle-bottom',
      cameraOffset: [-150, 150, 150],
      mouseDegreeOffset: -2,
      load: false,
    },
    null,
  ],
]

export const chunkIndex = (chunkName) => {
  let chunkIndex = [0, 0]

  chunksData.map((chunk, i) => {
    chunk.map((chunkItem, j) => {
      if (chunkItem && chunkItem.name === chunkName) {
        chunkIndex = [i, j]
      }
    })
  })

  return chunkIndex
}

import create from 'zustand'
import produce from 'immer'

interface ChunkData {
  name: string
  cameraOffset: [number, number, number]
  mouseDegreeOffset: number
  load: boolean
}

type ChunkArr = ChunkData[]

interface LoadState {
  chunks: ChunkArr[]
  chunkIndex: (chunkName: string) => [number, number]
}

const useLoad = create<LoadState>((set, get) => {
  return {
    chunks: chunksData,
    chunkIndex: (chunkName) => {
      let chunkIndex = [0, 0]

      get().chunks.map((chunk, i) => {
        chunk.map((chunkItem, j) => {
          if (chunkItem && chunkItem.name === chunkName) {
            chunkIndex = [i, j]
          }
        })
      })

      return chunkIndex
    },
    chunkData: (chunkName) => {
      let chunkData

      get().chunks.map((chunk, i) => {
        chunk.map((chunkItem, j) => {
          if (chunkItem && chunkItem.name === chunkName) {
            chunkData = chunkItem
          }
        })
      })

      return chunkData
    },
    loadNeighbourChunks: (currentChunkLocation) => {
      set(
        produce((state) => {
          console.log('loading neighbour chunks ....')
          const [x, y] = currentChunkLocation

          if (state.chunks[x - 1]) {
            state.chunks[x - 1][y - 1]
              ? (state.chunks[x - 1][y - 1].load = true)
              : null

            state.chunks[x - 1][y] ? (state.chunks[x - 1][y].load = true) : null
            state.chunks[x - 1][y + 1]
              ? (state.chunks[x - 1][y + 1].load = true)
              : null
          }

          state.chunks[x][y - 1] ? (state.chunks[x][y - 1].load = true) : null
          // state.chunks[x][y - 1].load = true
          state.chunks[x][y + 1] ? (state.chunks[x][y + 1].load = true) : null

          if (state.chunks[x + 1]) {
            state.chunks[x + 1][y - 1]
              ? (state.chunks[x + 1][y - 1].load = true)
              : null
            state.chunks[x + 1][y] ? (state.chunks[x + 1][y].load = true) : null
            state.chunks[x + 1][y + 1]
              ? (state.chunks[x + 1][y + 1].load = true)
              : null
          }
        })
      )
    },
  }
})

export default useLoad
