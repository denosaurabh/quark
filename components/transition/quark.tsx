import { styled } from '@/stitches.config'

const QuarkTransition = () => {
  return (
    <QuarkTranContainer>
      <Heading>Quark</Heading>
      <Text>Elo</Text>
    </QuarkTranContainer>
  )
}

export default QuarkTransition

const QuarkTranContainer = styled('div', {
  width: '100vw',
  height: '100vh',

  backgroundColor: '#fff',
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
