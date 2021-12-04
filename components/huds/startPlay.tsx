import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useHUD from '@/store/huds/main'
import Button from '../button'
import Input from '../input'

const StartPlayHUD = () => {
  const { setCurrentHud } = useHUD(({ setCurrentHud }) => ({ setCurrentHud }))

  const onStartPlayClick = () => {
    useCharacter.getState().setCanMove(true)
    console.log('settnig default hud')
    setCurrentHud('default')
  }

  useEffect(() => {
    useCharacter.getState().setCanMove(false)
  }, [])

  return (
    <StartPlayHUDStyled>
      <Header />
      <StartPlayContainer
        onPointerDown={() => {
          useCharacter.getState().setCanMove(false)
        }}
        onPointerUp={() => {
          useCharacter.getState().setCanMove(true)
        }}
      >
        <LeftBox>
          <h4>About the Project</h4>
          <p>
            A NFT marketplace in a interactive 3d experience. the project was
            made during the amazing {/* <Link > */}
            <a
              href='https://buidlit.polygon.technology'
              target='_blank'
              rel='noreferrer'
            >
              <u>polygon buidlit hackathon</u>
            </a>
            {/* </Link>{' '} */}
            organized in OCT-NOV 2021.
            <br />
            <br />
            build with # by
            <a href='https://denosaurabh.me' target='_blank' rel='noreferrer'>
              <u>denosaurabh</u>
            </a>
          </p>
        </LeftBox>
        <RightBox>
          <Input label='Choose Your Name' type='name' />

          <Label>Choose Lobby</Label>
          <LobbyContainer>
            <LobbyBox>
              <h6>Main Lobby</h6>
              <p>32{'<'} </p>
            </LobbyBox>
            <LobbyBox>
              <h6>Lobby @2</h6>
              <p>5{'<'} </p>
            </LobbyBox>
            <LobbyBox>
              <h6>Lobby @3</h6>
              <p>2{'<'} </p>
            </LobbyBox>
          </LobbyContainer>
          <Button
            css={{ width: '100%', padding: '0.5rem 2rem 1.5rem 2rem' }}
            onClickHandler={onStartPlayClick}
          >
            Enter The World /
          </Button>
        </RightBox>
      </StartPlayContainer>
    </StartPlayHUDStyled>
  )
}

export default StartPlayHUD

const StartPlayHUDStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8rem',

  height: '100%',
})

const StartPlayContainer = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'space-between',
})

const LeftBox = styled('div', {
  justifySelf: 'flex-start',

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',

  fontFamily: '$display',

  width: '50rem',

  h4: {
    fontSize: '5rem',
    color: '#DDDDDD',
    textDecoration: 'underline',
  },

  p: {
    fontSize: '3rem',
    color: '#DDDDDD',

    a: {
      marginLeft: '1rem',
    },
  },
})

const RightBox = styled('div', {
  marginTop: 'auto',

  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'flex-end',
  gap: '4rem',

  fontFamily: '$display',

  width: '40rem',
  height: 'fit-content',

  h4: {
    fontSize: '5rem',
    color: '#DDDDDD',
    textDecoration: 'underline',
  },

  p: {
    fontSize: '3rem',
    color: '#DDDDDD',
  },
})

const Label = styled('h6', {
  fontFamily: '$display',
  fontSize: '4rem',
  color: '#DDDDDD',

  '&:hover': {
    cursor: 'pointer',
  },
})

const LobbyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& div:first-child': {
    borderBottom: 'none',
  },
})

const LobbyBox = styled('div', {
  width: '100%',
  color: '#DDDDDD',

  display: 'flex',
  justifyContent: 'space-between',

  padding: '2rem 3rem 3rem 3rem',
  border: '5px solid #E9E9E9',

  h6: {
    fontSize: '5rem',
    color: 'inherit',
  },

  p: {
    fontSize: '5rem',
    color: 'inherit',
  },

  '&:hover': {
    cursor: 'pointer',

    backgroundColor: '#E9E9E9',
    color: '#1A1919',
  },
})
