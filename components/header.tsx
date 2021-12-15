import { useState } from 'react'
import { styled } from '@/stitches.config'
import useSound from 'use-sound'

import useHUD from '@/store/huds/main'
// import BGMusic from '../audio/ea-ashkira-place-of-light-432-hz.mp3'
import dynamic from 'next/dynamic'

// const BGMusic = dynamic(
//   () => import('../audio/ea-ashkira-place-of-light-432-hz.mp3'),
//   { ssr: false }
// )

const Header = () => {
  const [playing, setPlaying] = useState(false)
  const [play, { stop }] = useSound(
    '/audio/ea-ashkira-place-of-light-432-hz.mp3'
  )

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
      <Heading css={{ textDecoration: 'underline', marginLeft: 'auto' }}>
        <span
          onClick={() => {
            !playing ? play() : stop()
            setPlaying(!playing)
          }}
        >
          {!playing ? 'play' : 'stop'} music{' '}
        </span>
      </Heading>
      <Heading
        css={{ textDecoration: 'underline', marginLeft: 'auto' }}
        as='a'
        href='/note'
        target='_blank'
      >
        Note for Organizers {'"'}
      </Heading>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled('header', {
  width: '100%',
  height: 'fit-content',

  display: 'flex',
  // justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',
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
    // cursor: 'pointer',
    cursor: 'url("img/pointer.png"), pointer',
    // cursor: 'url("/img/cursor.png"), auto',
  },
})
