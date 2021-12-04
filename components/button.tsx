import { styled } from '@/stitches.config'

interface ButtonProps {
  onClickHandler?: () => void
  css?: Record<string, unknown>
}

const Button: React.FC<ButtonProps> = ({ children, onClickHandler, css }) => {
  return (
    <ButtonStyled css={css} onClick={onClickHandler}>
      {children}
    </ButtonStyled>
  )
}

export default Button

const ButtonStyled = styled('button', {
  width: 'fit-content',
  height: 'fit-content',

  backgroundColor: '#F4EEF4',

  outline: 'none',
  border: 'none',

  fontFamily: '$display',
  fontSize: '6rem',
  color: '#292929',
  lineHeight: '50px',

  padding: '0 1.6rem 1rem 1.6rem',

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.005) translateY(-10px)',
  },
})
