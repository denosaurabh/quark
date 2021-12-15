import { useEffect } from 'react'
import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useHUD from '@/store/huds/main'
import Button from '../button'
import { useThree } from '@react-three/fiber'
import respawnEvent from '@/events/respawn'

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
    <div>
      <Header />
      <MenuHUDContainer>
        <div>
          <Button onClickHandler={onResumeClick}>Resume {'>'}</Button>
          {/* <Button onClickHandler={onRedeployClick}>Redeploy \</Button> */}
        </div>
        <div>
          <Button>Settings []</Button>

          <Button as='a' href='/note' target='_blank'>
            About {'/'}
          </Button>
        </div>
      </MenuHUDContainer>
    </div>
  )
}

export default MenuHUD

const MenuHUDContainer = styled('div', {
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
  },
})

const Heading = styled('h4', {
  fontSize: '10rem',
})
