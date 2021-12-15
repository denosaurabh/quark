import { useEffect, useState } from 'react'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import { db } from '@/firebase/init'
import { onValue, ref } from 'firebase/database'

const ChooseLobby = () => {
  const [selectedLobby, setSelectedLobby] = useState('main')
  const [lobbies, setLobbies] = useState({})

  const onChooseLobbyClickHandler = (name) => {
    setSelectedLobby(name)
    useCharacter.getState().setLobby(name)
  }

  const lobbiesRef = ref(db, 'lobbies')
  useEffect(() => {
    const unsub = onValue(lobbiesRef, (snapshot) => {
      const lobbies = snapshot.val()
      setLobbies(lobbies)
    })

    return () => {
      unsub()
    }
  }, [])

  return (
    <>
      <Label>Choose Lobby</Label>
      <LobbyContainer>
        <LobbyBox
          onClick={() => onChooseLobbyClickHandler('main')}
          selected={selectedLobby === 'main'}
        >
          <h6>Main Lobby</h6>
          <p>
            {lobbies &&
              lobbies['main'] &&
              Object.keys(lobbies['main'].users).length}
            {'<'}{' '}
          </p>
        </LobbyBox>
        <LobbyBox
          onClick={() => onChooseLobbyClickHandler('lobby-1')}
          selected={selectedLobby === 'lobby-1'}
        >
          <h6>Lobby @2</h6>
          <p>
            {lobbies &&
              lobbies['lobby-1'] &&
              Object.keys(lobbies['lobby-1'].users).length}
            {'<'}{' '}
          </p>
        </LobbyBox>
        <LobbyBox
          onClick={() => onChooseLobbyClickHandler('lobby-2')}
          selected={selectedLobby === 'lobby-2'}
        >
          <h6>Lobby @3</h6>
          <p>
            {lobbies &&
              lobbies['lobby-2'] &&
              Object.keys(lobbies['lobby-2'].users).length}
            {'<'}{' '}
          </p>
        </LobbyBox>
      </LobbyContainer>
    </>
  )
}

export default ChooseLobby

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

  variants: {
    selected: {
      true: {
        backgroundColor: '#E9E9E9',
        color: '#1A1919',
      },
    },
  },
})
