import { styled } from '@/stitches.config'
import { motion } from 'framer-motion'

const QuarkTransition = ({ ...props }) => {
  return (
    <QuarkTranContainer {...props}>
      <MidBox>
        <Heading>Quark</Heading>
        <Text>NFT Marketplace in an Interactive 3D experience</Text>
      </MidBox>
    </QuarkTranContainer>
  )
}

export default QuarkTransition

const QuarkTranContainer = styled(motion.div, {
  width: '100vw',
  height: '100vh',

  backgroundColor: '#fff',

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
  color: '#000',
})

const Text = styled('p', {
  fontSize: '3rem',
  fontFamily: '$display',
  lineHeight: '50px',
  color: '#000',
})
