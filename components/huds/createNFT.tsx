import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useCreateNFT from '@/store/huds/createNFT'
import Button from '../button'
import Input from '../input'

const CreateNFTHUD = () => {
  const { setCanMove } = useCharacter(({ setCanMove }) => ({ setCanMove }))

  const { formInput, setFormInput, setSubmitted, isSubmitted } = useCreateNFT(
    (state) => state
  )

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormInput(name, value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isSubmitted) {
      setSubmitted(true)
    }
  }

  return (
    <div>
      <Header />
      <MidBox>
        <InfoBox>
          <h4>
            Publish your own NFT
            <br />
            !!PLEASE READ BELOW!!
          </h4>
          <p>
            This is a test version of the application, and not meant for being
            used as production. So, please do not publish your NFT only in sake
            of selling it.
          </p>
        </InfoBox>
        <CreateNFTForm
          onPointerDown={() => {
            setCanMove(false)
          }}
          onPointerUp={() => {
            setCanMove(true)
          }}
          onSubmit={onSubmit}
        >
          <Input
            label='NFT Name'
            type='text'
            placeHolder='Name'
            name='name'
            value={formInput.name}
            onChange={onInputChangeHandler}
          />
          <Input
            label='NFT Description'
            type='text'
            placeHolder='description'
            name='description'
            value={formInput.description}
            onChange={onInputChangeHandler}
            css={{ input: { height: '20rem' } }}
          />
          <Input
            label='NFT Price'
            type='text'
            placeHolder='100eth'
            name='price'
            value={formInput.price}
            onChange={onInputChangeHandler}
          />

          <Button type='submit'>publish your nft {'>'}</Button>
        </CreateNFTForm>
      </MidBox>
    </div>
  )
}

export default CreateNFTHUD

const MidBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  height: '100%',
})

const InfoBox = styled('div', {
  justifySelf: 'flex-start',

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',

  width: '50rem',
  marginRight: 'auto',

  fontFamily: '$display',

  padding: '3rem 0',

  h4: {
    fontSize: '8rem',
    lineHeight: '50px',

    color: '#DDDDDD',
    textDecoration: 'underline',
  },

  p: {
    fontSize: '3rem',
    color: '#DDDDDD',

    a: {
      margin: '0 1rem',
    },
  },
})

const CreateNFTForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',

  width: '40rem',
  height: 'fit-content',

  margin: 'auto 0 10rem 0',
})
