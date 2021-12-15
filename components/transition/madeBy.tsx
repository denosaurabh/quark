import { motion } from 'framer-motion'
import { styled } from '@/stitches.config'

const MadeByTransition = ({ ...props }) => {
  return (
    <MadeBYContainer {...props}>
      <MidBox>
        <Text css={{ marginTop: '12rem' }}>Experience Created by</Text>
        <Heading css={{ marginBottom: '2rem' }}>
          <a href='https://denosaurabh.me' target='_blank' rel='noreferrer'>
            denosaurabh
          </a>
        </Heading>
        <Text>
          including all Artwork, Design and Code (except credited below)
        </Text>
        <Text css={{ marginTop: '8rem', fontSize: '8rem' }}>Credits:</Text>
        <Text css={{ fontSize: '5rem' }}>
          - Font Used:{' '}
          <u>
            <a
              href='https://nimblebeastscollective.itch.io/magosfonts'
              target='_blank'
              rel='noreferrer'
            >
              MagoFont
            </a>
          </u>
        </Text>

        <Text css={{ fontSize: '5rem' }}>- Royalty Free Music</Text>
      </MidBox>
    </MadeBYContainer>
  )
}

export default MadeByTransition

const MadeBYContainer = styled(motion.div, {
  width: '100vw',
  height: '100vh',

  backgroundColor: '#f8f9fa',

  display: 'flex',
  justifyContent: 'center',
})

const MidBox = styled(motion.div, {
  width: '30%',
  minWidth: '50rem',
  height: '100%',

  '@mobile': {
    width: '95%',
    minWidth: '95%',
  },
})

const Heading = styled('h1', {
  fontSize: '12rem',
  fontFamily: '$display',
  lineHeight: '50px',
  color: '#212529',
})

const Text = styled('p', {
  fontSize: '4rem',
  fontFamily: '$display',
  lineHeight: '30px',
  color: '#212529',
})
