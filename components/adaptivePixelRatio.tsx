import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

const AdaptivePixelRatio = () => {
  const current = useThree((state) => state.performance.current)
  const setPixelRatio = useThree((state) => state.gl.setPixelRatio)

  useEffect(() => {
    setPixelRatio(window.devicePixelRatio * current)
  }, [current])

  return null
}

export default AdaptivePixelRatio
