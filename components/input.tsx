import { styled } from '@/stitches.config'

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: 'auto',
})

const InputLabel = styled('label', {
  fontFamily: '$display',
  fontSize: '4rem',
  marginBottom: '2.5rem',
  color: '#DDDDDD',

  '&:hover': {
    cursor: 'pointer',
  },
})

const StyledInput = styled('input', {
  width: '100%',

  fontFamily: '$display',
  fontSize: '6rem',

  padding: '0rem 0rem 1rem 1.5rem',

  background: 'rgba(247, 247, 247, 0.04)',
  color: '#FFFFFF',

  border: '5px solid #FDF7F7',
})

interface InputI {
  label?: string | JSX.Element
  css?: Record<string, unknown>
  [key: string]: unknown
}

const Input: React.FC<InputI> = ({ size, label, css, ...inputProps }) => {
  return (
    <InputContainer css={css}>
      {label ? <InputLabel htmlFor='input'>{label}</InputLabel> : null}
      <StyledInput id='input' {...inputProps} />
    </InputContainer>
  )
}

export default Input
