import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import BillBoard from '@/components/billboard'
import { Html, useProgress } from '@react-three/drei'
import CollisionSystem from '@/components/canvas/collisionSystem'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const Castle = dynamic(() => import('@/components/canvas/castle'), {
  ssr: false,
})

const Character = dynamic(() => import('@/components/canvas/Character'), {
  ssr: false,
})

// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// canvas components goes here

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' transparent opacity={0.5} />
    </mesh>
  )
}

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const R3F = () => {
  return (
    <>
      <Suspense
        // fallback={<BillBoard>loading.....</BillBoard>}
        fallback={<Loader />}
        r3f
      >
        <Character position={[0, 100, -20]} r3f />
        <Castle r3f />
        <CollisionSystem r3f />
        {/* <World r3f /> */}
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
      title: 'Index',
    },
  }
}
