import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import BillBoard from '@/components/billboard'
import Marketplace from '@/components/canvas/marketplace'
import CollisionSystem from '@/components/canvas/collisionSystem'
import RealTimeData from '@/components/realtime_character'
import DBPlayers from '@/components/dbPlayers'
import BackgroundMusic from '@/components/backgroundMusic'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const WorldNew = dynamic(() => import('@/components/canvas/WorldNew'), {
  ssr: false,
})

const Character = dynamic(() => import('@/components/canvas/Character'), {
  ssr: false,
})

// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Suspense
        fallback={<BillBoard position={[0, 0, 0]}>loading....</BillBoard>}
      >
        <Character position={[240, 5, 70]} r3f />
        <WorldNew r3f />
        <Marketplace r3f />
        <CollisionSystem r3f />
        <RealTimeData r3f />
        <DBPlayers r3f />
        {/* <BackgroundMusic r3f /> */}
      </Suspense>
    </>
  )
}

const Page = () => {
  return (
    <>
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Play',
    },
  }
}
