import Header from '@/components/header'
import { styled } from '@/stitches.config'
import useCharacter from '@/store/character'
import useBuyNFT from '@/store/huds/buyNFT'
import useHUD from '@/store/huds/main'
import useNFT from '@/store/huds/nft'
import Button from '../button'

const NFTHUD = () => {
  // const { setCanMove } = useCharacter(({ setCanMove }) => ({ setCanMove }))

  // const { formInput, setFormInput, setSubmitted, isSubmitted } = useCreateNFT(
  //   (state) => state
  // )

  const { nftInfo } = useNFT(({ nftInfo }) => ({ nftInfo }))
  console.log(nftInfo, 'bought nft nft info')

  const { price, name, description, owner } = nftInfo

  return (
    <>
      <Header />
      <BuyNFTBox>
        <h4>
          {name} <br />
        </h4>

        <p>{description}</p>
        <p>from {owner}</p>
        <p>{price}eth</p>

        <br />
        <br />
        <br />
        <br />

        <Button
          onClickHandler={() => {
            useCharacter.getState().setCanMove(true)
            useHUD.getState().setCurrentHud('default')
          }}
          css={{
            backgroundColor: 'transparent',
            color: '#fff',
            textDecoration: 'underline',
          }}
        >
          Back
        </Button>
      </BuyNFTBox>
    </>
  )
}

export default NFTHUD

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
    fontSize: '5rem',
    color: '#DDDDDD',

    a: {
      margin: '0 1rem',
    },
  },
})
