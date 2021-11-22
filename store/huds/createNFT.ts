import create from 'zustand'
import produce from 'immer'

interface CreateNFTHudState {
  formInput: {
    name: string
    description: string
    price: string
  }
  isSubmitted: boolean
  setFormInput: (name: string, value: string) => void
  setSubmitted: (submitted: boolean) => void
}

const useCreateNFT = create<CreateNFTHudState>((set) => {
  return {
    formInput: {
      name: '',
      description: '',
      price: '',
    },
    isSubmitted: false,
    setFormInput: (name, value) => {
      set(
        produce((state) => {
          state.formInput[name] = value
        })
      )
    },
    setSubmitted: (value) => {
      set(
        produce((state) => {
          state.isSubmitted = value
        })
      )
    },
  }
})

export default useCreateNFT
