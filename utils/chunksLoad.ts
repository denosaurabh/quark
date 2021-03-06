export const chunksData = [
  [
    null,
    null,
    {
      name: 'throne-left',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
    },
    {
      name: 'throne-right',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
    },
  ],
  [
    null,
    null,
    {
      name: 'castle-pillor-top-left',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
    },
    {
      name: 'castle-pillor-top-right',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
    },
  ],
  [
    null,
    null,
    {
      name: 'castle-pillor-bottom-left',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
    },
    {
      name: 'castle-pillor-bottom-right',
      cameraOffset: [150, 150, 0],
      mouseDegreeOffset: -0,
    },
  ],
  [
    null,
    null,
    {
      name: 'castle-enter-left',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
    },
    {
      name: 'castle-enter-right',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
    },
  ],
  [
    {
      name: 'user-bridge-portal',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
    },
    {
      name: 'user-portal',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
    },
    {
      name: 'palace-top-left',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
    },
    {
      name: 'palace-top-right',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
    },
  ],
  [
    {
      name: 'user-bridge-end',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
    },
    {
      name: 'user-enter',
      cameraOffset: [150, 150, -150],
      mouseDegreeOffset: 7,
    },
    {
      name: 'palace-bottom-left',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
    },
    {
      name: 'palace-bottom-right',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
    },
  ],
  [
    {
      name: 'user-drop-model',
      cameraOffset: [150, 150, 150],
      mouseDegreeOffset: -0.7,
    },
    null,
    {
      name: 'castle-bottom',
      cameraOffset: [-150, 150, 150],
      mouseDegreeOffset: -2,
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

// const neighbouringChunks = (chunkName) => {
//   const chunk = chunkIndex(chunkName)

//   return chunk.neighbours
// }
