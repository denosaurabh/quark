import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import { Html } from '@react-three/drei'

const PlayerName = () => {
  const name = useCharacter(({ name }) => name)
  console.log(name)

  return (
    <Html
      as='div' // Wrapping element (default: 'div')
      prepend // Project content behind the canvas (default: false)
      center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
      fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
      distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
      zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
      transform // If true, applies matrix3d transformations (default=false)
      sprite // Renders as sprite, but only in transform mode (default=false)
      onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
      position={[0, 50, 0]}
    >
      <PlayerHeading>{name}</PlayerHeading>
    </Html>
  )
}

export default PlayerName

const PlayerHeading = styled('h6', {
  fontSize: '16rem',
  fontFamily: '$display',

  backgroundColor: '#FFFFFF',
  padding: '4rem 4rem 8rem 4rem',
})
