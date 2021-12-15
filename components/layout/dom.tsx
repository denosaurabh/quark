import useStore from '@/store/store'
import { useEffect, useRef } from 'react'
import { styled } from '@/stitches.config'

import DefaultHUD from '@/components/huds/default'
import CreateNFTHUD from '@/components/huds/createNFT'
import BuyNFTHUD from '@/components/huds/buyNFT'
import StartPlayHUD from '@/components/huds/startPlay'
import MenuHUD from '@/components/huds/menu'

import useHUD from '@/store/huds/main'
import NFTHUD from '../huds/nft'
import Transition from '../transition/transitionHud'
import { useRouter } from 'next/router'
import useCharacter from '@/store/character'
import Event from '../event'

const Dom = ({ children }) => {
  const domRef = useRef<HTMLDivElement>(null)
  const { currentHud, showHud, setShowHud, setCurrentHud } = useHUD(
    ({ currentHud, showHud, setShowHud, setCurrentHud }) => ({
      currentHud,
      showHud,
      setShowHud,
      setCurrentHud,
    })
  )

  const onKeyDown = (e) => {
    // console.log(e.key, currentHud)

    if (e.key === 'Escape') {
      console.log(currentHud)

      if (currentHud !== 'menu' && currentHud !== 'startPlay') {
        console.log('setting menu')
        setCurrentHud('menu')
      } else {
        console.log('setting default')
        setCurrentHud('default')
      }
    }
  }

  const router = useRouter()

  useEffect(() => {
    useStore.setState({ dom: domRef })

    if (router.pathname === '/play' && currentHud === 'startPlay') {
      setCurrentHud('default')
      useCharacter.getState().setCanMove(true)
    }

    if (window) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [, currentHud])

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
      <Transition />
      {children}
      {currentHud === 'default' && <DefaultHUD />}
      {currentHud === 'startPlay' && <StartPlayHUD />}
      {currentHud === 'createNFT' && <CreateNFTHUD />}
      {currentHud === 'buyNFT' && <BuyNFTHUD />}
      {currentHud === 'nft' && <NFTHUD />}
      {currentHud === 'menu' && <MenuHUD />}

      <Event />
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

  overflow: 'hidden',
  userSelect: 'none',
  zIndex: 1000,

  '& .hud-box': {
    padding: '3rem',
  },

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
