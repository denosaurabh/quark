import { useEffect } from 'react'
import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useHUD from '@/store/huds/main'
import Button from '../button'
import { useThree } from '@react-three/fiber'
import respawnEvent from '@/events/respawn'
import { motion, AnimatePresence } from 'framer-motion'

const MenuHUD = () => {
  // const { scene } = useThree()

  const onResumeClick = () => {
    useHUD.getState().setCurrentHud('default')
  }

  const onRedeployClick = () => {
    // respawnEvent.start()
    // scene.getObjectByName('character').position.set(240, 5, 70)
  }

  return (
    <div className='hud-box'>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <MenuHUDContainer
          key='menu-hud-animate'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <div>
            <Button onClickHandler={onResumeClick}>Resume {'>'}</Button>
            {/* <Button onClickHandler={onRedeployClick}>Redeploy \</Button> */}
          </div>
          <div>
            <Button>Settings []</Button>

            <Button as='a' href='/note' target='_blank'>
              About {'/'}
            </Button>

            <p>Lobby: {useCharacter.getState().lobby}</p>
          </div>
        </MenuHUDContainer>
      </AnimatePresence>
    </div>
  )
}

export default MenuHUD

const MenuHUDContainer = styled(motion.div, {
  width: '100%',
  height: '70%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  gap: '4rem',

  marginTop: '10rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',

    p: {
      fontFamily: '$display',
      fontSize: '4rem',
      color: '#fff',
    },
  },
})
