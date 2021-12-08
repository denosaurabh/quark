import { styled } from '@/stitches.config'
import useHUD from '@/store/huds/main'

const Header = () => {
  const onMenuClick = () => {
    const { currentHud, setCurrentHud } = useHUD.getState()
    const nextHud = currentHud === 'default' ? 'menu' : 'default'
    setCurrentHud(nextHud)
  }

  return (
    <HeaderStyled>
      <Heading css={{ fontSize: '14rem' }} onClick={onMenuClick}>
        *
      </Heading>
      <Heading css={{ textDecoration: 'underline' }}>Credits</Heading>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled('header', {
  width: '100%',
  height: 'fit-content',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const Heading = styled('h1', {
  fontFamily: '$display',
  fontSize: '40px',
  letterSpacing: '4px',

  color: 'white',
  // textShadow: '6px 4px 0px #000',
  backdropFilter: 'blur(2px)',

  marginBottom: '2rem',

  '&:hover': {
    cursor: 'pointer',
  },
})
