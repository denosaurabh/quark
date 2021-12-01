import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useBuyNFT from '@/store/huds/buyNFT'

const BuyNFTHUD = () => {
  // const { setCanMove } = useCharacter(({ setCanMove }) => ({ setCanMove }))

  // const { formInput, setFormInput, setSubmitted, isSubmitted } = useCreateNFT(
  //   (state) => state
  // )

  const onBuyNFTClick = (e) => {
    e.preventDefault()
    useCharacter.getState().setCanMove(false)

    console.log('onBuyNFTClick')

    if (!useBuyNFT.getState().isSubmitted) {
      useBuyNFT.getState().setSubmitted(true)
    }

    // if (!isSubmitted) {
    //   setSubmitted(true)
    // }
  }

  return (
    <>
      <Header />
      <Button onClick={onBuyNFTClick}>Buy NFT</Button>
    </>
  )
}

export default BuyNFTHUD

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
