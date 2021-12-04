import { useEffect } from 'react'
import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useHUD from '@/store/huds/main'

const MenuHUD = () => {
  return (
    <>
      <Header />
      <MenuHUDContainer
        onPointerDown={() => {
          useCharacter.getState().setCanMove(false)
        }}
        onPointerUp={() => {
          useCharacter.getState().setCanMove(true)
        }}
      >
        <Heading>This is Menu </Heading>
      </MenuHUDContainer>
    </>
  )
}

export default MenuHUD

const MenuHUDContainer = styled('div', {
  width: '100%',
  height: '100%',
})

const Heading = styled('h4', {
  fontSize: '10rem',
})

const Button = styled('button', {
  width: 'fit-content',
  height: 'fit-content',

  padding: '2rem',
  margin: '2rem 0',

  fontSize: '2rem',
  fontFamily: '$websafe',

  color: '#000',
  backgroundColor: 'white',
  border: '4px solid grey',
})
