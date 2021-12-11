import { Suspense } from 'react'
import dynamic from 'next/dynamic'

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
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}

const R3F = () => {
  return (
    <>
      <Suspense fallback={<Box />} r3f>
        <Character r3f />
        <Castle r3f />
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
