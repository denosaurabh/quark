import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useCreateNFT from '@/store/huds/createNFT'
import { useState } from 'react'

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
    <>
      <Header />
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
          type='text'
          placeholder='Name'
          name='name'
          value={formInput.name}
          onChange={onInputChangeHandler}
        />
        <Input
          type='text'
          placeholder='description'
          name='description'
          value={formInput.description}
          onChange={onInputChangeHandler}
        />
        <Input
          type='text'
          placeholder='price'
          name='price'
          value={formInput.price}
          onChange={onInputChangeHandler}
        />

        <Button type='submit'>Create NFT</Button>
      </CreateNFTForm>
    </>
  )
}

export default CreateNFTHUD

const CreateNFTForm = styled('form', {
  width: 'fit-content',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',

  margin: '10rem 0',
})

const Input = styled('input', {
  width: '30rem',
  height: 'fit-content',
  padding: '1rem',
  margin: '2rem 0',

  fontSize: '2rem',
  fontFamily: '$websafe',
})

const Button = styled('button', {
  width: 'fit-content',
  height: 'fit-content',

  padding: '2rem',
  margin: '2rem 0',

  fontSize: '2rem',
  fontFamily: '$websafe',

  color: '#000',
  backgroundColor: 'white',
  border: '4px solid grey',
})
