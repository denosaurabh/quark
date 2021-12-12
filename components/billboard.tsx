import { Html } from '@react-three/drei'
import { styled } from '@/stitches.config'

interface BillboardProps {
  position?: [number, number, number]
}

const BillBoard: React.FC<BillboardProps> = ({ position, children }) => {
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
      position={position}
    >
      <Text>{children}</Text>
    </Html>
  )
}

export default BillBoard

const Text = styled('h6', {
  fontSize: '16rem',
  fontFamily: '$display',

  lineHeight: '90px',

  backgroundColor: '#FFFFFF',
  padding: '4rem 4rem 8rem 4rem',
})
