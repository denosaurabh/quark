import { useEffect } from 'react'
import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useHUD from '@/store/huds/main'
import Button from '../button'

const MenuHUD = () => {
  return (
    <>
      <Header />
      <MenuHUDContainer>
        <div>
          <Button>Resume {'>'}</Button>
          <Button>Redeploy \</Button>
        </div>
        <div>
          <Button>Settings []</Button>
          <Button>About {'/'} </Button>
          <Button>Credits #</Button>
        </div>
      </MenuHUDContainer>
    </>
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
