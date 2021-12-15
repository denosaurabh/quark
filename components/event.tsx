import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { styled } from '@/stitches.config'
import { eventManager } from '@/events/global'

const Event = () => {
  const [event, setEvent] = useState({ message: '' })

  useEffect(() => {
    // subscribe to home component messages
    const subscription = eventManager.onMessage().subscribe(({ message }) => {
      if (message) {
        // add message to local state if not empty
        setEvent({ message })

        setTimeout(() => {
          setEvent({ message: '' })
        }, 5000)
      } else {
        // clear messages when empty message received
        setEvent({ message: '' })
      }
    })

    // return unsubscribe method to execute when component unmounts
    return subscription.unsubscribe
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {event.message && (
        <EventBox
          initial={{ transform: 'translateX(100%)' }}
          animate={{ transform: 'translateX(0%)' }}
          exit={{ transform: 'translateX(100%)' }}
          transition={{ duration: 0.8 }}
        >
          {event.message}
        </EventBox>
      )}
    </AnimatePresence>
  )
}

export default Event

const EventBox = styled(motion.div, {
  position: 'absolute',
  top: '10%',
  right: '0',

  padding: '1rem 1rem 2rem 1rem',
  maxWidth: '40rem',

  backgroundColor: '#fff',
  color: '#000',

  fontSize: '5rem',
  fontFamily: '$display',
})
