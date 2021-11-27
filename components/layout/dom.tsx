import useStore from '@/store/store'
import { useEffect, useRef } from 'react'
import { styled } from '@/stitches.config'
import DefaultHUD from '@/components/huds/default'
import CreateNFTHUD from '@/components/huds/createNFT'
import useHUD from '@/store/huds/main'

const Dom = ({ children }) => {
  const domRef = useRef<HTMLDivElement>(null)
  const { currentHud, showHud, setShowHud } = useHUD(
    ({ currentHud, showHud, setShowHud }) => ({
      currentHud,
      showHud,
      setShowHud,
    })
  )

  useEffect(() => {
    useStore.setState({ dom: domRef })
  }, [])

  return (
    <HUDContainer
      className='hud-container'
      ref={domRef}
      showHud={showHud}
      onDragEnter={(e) => {
        e.preventDefault()
        setShowHud(false)
      }}
    >
      {children}
      {currentHud === 'default' && <DefaultHUD />}
      {currentHud === 'createNFT' && <CreateNFTHUD />}
    </HUDContainer>
  )
}

export default Dom

const HUDContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,

  width: '100vw',
  height: '100vh',
  padding: '2rem',

  overflow: 'hidden',
  userSelect: 'none',
  zIndex: 1000,

  variants: {
    showHud: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    showHud: true,
  },
})
