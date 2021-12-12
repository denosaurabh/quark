import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useBuyNFT from '@/store/huds/buyNFT'
import useHUD from '@/store/huds/main'
import Button from '../button'

const BuyNFTHUD = () => {
  // const { setCanMove } = useCharacter(({ setCanMove }) => ({ setCanMove }))

  // const { formInput, setFormInput, setSubmitted, isSubmitted } = useCreateNFT(
  //   (state) => state
  // )

  const { nftInfo } = useBuyNFT(({ nftInfo }) => ({ nftInfo }))
  console.log(nftInfo)

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

  const { price, name, description, owner } = nftInfo
  console.log(nftInfo)

  return (
    <>
      <Header />
      <BuyNFTBox>
        <h4>
          {name} <br />
          !PLEASE READ!
        </h4>

        <p>{description}</p>
        <p>from {owner}</p>

        <br />
        <br />
        <br />
        <br />
        <p>
          This is a test project and do not mean to be used as a production. So
          Please, do not buy the NFTs shown here.
        </p>

        <Button onClickHandler={onBuyNFTClick}>
          Buy NFT ({price}eth) {'/'}
        </Button>

        <Button
          onClickHandler={() => {
            useCharacter.getState().setCanMove(true)
            useHUD.getState().setCurrentHud('default')
          }}
          css={{ backgroundColor: 'transparent', color: '#fff' }}
        >
          Cancel
        </Button>
      </BuyNFTBox>
    </>
  )
}

export default BuyNFTHUD

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

  padding: '3rem 0',
})

const BuyNFTBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',

  fontFamily: '$display',

  width: '40rem',
  height: 'fit-content',

  margin: '5rem 0 10rem 0',

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
