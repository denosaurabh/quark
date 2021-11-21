import detectLeftButtonBtn from '@/utils/detectLeftMouseBtn'
import { useEffect, useState } from 'react'

const useMouseDegreeOnDrag = () => {
  const [active, setActive] = useState(false)
  const [mouseDegree, setMouseDegree] = useState(0)

  const handleMouseMove = (e) => {
    if (!active) return

    const { clientX: mouseX, clientY: mouseY } = e

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // calculate mouse degree
    const mouseDegree = -Math.atan2(mouseY - centerY, mouseX - centerX)

    setMouseDegree(mouseDegree)
  }

  const onMouseDown = (e) => {
    detectLeftButtonBtn(e) && setActive(true)
  }

  const onMouseUp = () => {
    setActive(false)
  }

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    window.addEventListener('click', handleMouseMove)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)

      window.addEventListener('click', handleMouseMove)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return mouseDegree
}

export default useMouseDegreeOnDrag
