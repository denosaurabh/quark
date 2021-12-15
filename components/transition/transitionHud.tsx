import { useState } from 'react'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'

import { styled } from '@/stitches.config'
import MadeByTransition from './madeBy'
import QuarkTransition from './quark'
import TechAndArtTransition from './techAndArt'
import { useRouter } from 'next/router'

const Transition = () => {
  const [currentAni, setCurrentAni] = useState(0)

  const router = useRouter()
  if (currentAni === 4 || router.pathname === '/play') return <></>

  return (
    <TransitionContainer>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => currentAni === 3 && setCurrentAni(4)}
      >
        {currentAni === 0 && (
          <QuarkTransition
            key='transition-quark'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
            onAnimationComplete={() => {
              // console.log('animation complete', currentAni)
              setCurrentAni(1)
            }}
          />
        )}
        {currentAni === 1 && (
          <TechAndArtTransition
            key='transition-arttech'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            onAnimationComplete={() => {
              // console.log('animation complete', currentAni)
              setCurrentAni(2)
            }}
          />
        )}
        {currentAni === 2 && (
          <MadeByTransition
            key='transition-madeby'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            onAnimationComplete={() => {
              // console.log('animation complete', currentAni)
              setCurrentAni(3)
            }}
          />
        )}
      </AnimatePresence>

      {/* <MadeByTransition /> */}
    </TransitionContainer>
  )
}

export default Transition

const TransitionContainer = styled(motion.div, {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#fff',
})
