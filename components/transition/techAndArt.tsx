import { styled } from '@/stitches.config'
import { motion } from 'framer-motion'

const TechAndArtTransition = ({ ...props }) => {
  return (
    <TechAndArtContainer {...props}>
      <MidBox>
        <Text>Made Possible By</Text>
        {/* <TechBox css={{ fontSize: '12rem', padding: '3rem 3rem 5rem 3rem' }}> */}
        <Heading css={{ fontSize: '16rem', marginBottom: '6rem' }}>
          POLYGON
        </Heading>
        {/* </TechBox> */}
        <Text>and....</Text>

        <TechContainer>
          <TechBox>Vercel</TechBox>
          <TechBox>Poimandres</TechBox>
          <TechBox>Radix</TechBox>
          <TechBox>Framer Motion</TechBox>
          <TechBox>Ethereum</TechBox>
          <TechBox>Solidity </TechBox>
          <TechBox>Hardhat </TechBox>
        </TechContainer>
        <Text>and many more...</Text>

        <Text css={{ marginTop: '6rem' }}>Voxel Art made possible with</Text>
        <TechContainer>
          <TechBox>Magicavoxel</TechBox>
          <TechBox>Asperite</TechBox>
          <TechBox>Blender</TechBox>
        </TechContainer>
      </MidBox>
    </TechAndArtContainer>
  )
}

export default TechAndArtTransition

const TechAndArtContainer = styled(motion.div, {
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

const TechContainer = styled(motion.div, {
  width: '100%',

  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
})

const TechBox = styled(motion.div, {
  backgroundColor: '#212529',

  fontSize: '6rem',
  fontFamily: '$display',
  lineHeight: '2px',
  color: '#f8f9fa',

  padding: '2rem 1rem 3rem 1rem',
  // margin: '1rem',
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
  lineHeight: '50px',
  color: '#495057',
})
