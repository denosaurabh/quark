import { styled } from '@/stitches.config'

const Header = () => {
  return (
    <HeaderStyled>
      <Heading>denosaurabh</Heading>
      <Heading>Players 1 / 50</Heading>
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
  textShadow: '6px 4px 0px #000',
  backdropFilter: 'blur(2px)',

  marginBottom: '2rem',
})
