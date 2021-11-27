import { Suspense, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { GroupProps, useFrame } from '@react-three/fiber'
import useCharacter from '@/store/character'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type ModelI = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshBasicMaterial>
}

interface DropModelProps {
  fileUrl: string
}

const DropModel = ({ fileUrl }: DropModelProps) => {
  const modelRef = useRef<GroupProps>(null)

  // const { setCanMove } = useCharacter(({ setCanMove }) => ({ setCanMove }))

  const model = useGLTF(`${fileUrl}`)
  // const { nodes: modelNodes, materials: modelMaterials } = model

  // console.log(modelRef)

  useEffect(() => {
    if (modelRef.current) {
      const maxSize = new THREE.Vector3(10, 10, 10)
      const box = new THREE.Box3().setFromObject(model.scene)
      const size = box.getSize(new THREE.Vector3())

      const scale = new THREE.Vector3(
        maxSize.x / size.x,
        maxSize.y / size.y,
        maxSize.z / size.z
      )

      modelRef.current.scale.set(scale.x, scale.y, scale.z)
    }
  }, [modelRef])

  // console.log(modelNodes, modelMaterials, 'imported model')
  const onModelClick = () => {
    console.log(modelRef.current, 'clicked')

    if (!modelRef.current) return

    modelRef.current.scale.set(5, 5, 5)
  }

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(clock.getElapsedTime()) * 5 + 20
      modelRef.current.rotation.y = clock.getElapsedTime()
    }
  })

  // const jsx = Object.values(modelNodes).map((node, i) => {
  //   // console.log(node, i)

  //   if (node.type === 'Mesh') {
  //     return (
  //       <mesh
  //         key={i}
  //         position={[0, 0, 0]}
  //         geometry={modelNodes[node.name].geometry}
  //         material={modelNodes[node.name].material}
  //         onPointerDown={() => {
  //           setCanMove(false)
  //           onModelClick()
  //         }}
  //         onPointerUp={() => {
  //           setCanMove(true)
  //         }}
  //       />
  //     )
  //   }
  // })

  // const gltf = useLoader(GLTFLoader, `${fileUrl}`)

  // return (
  //   <Suspense fallback={null}>
  //     <primitive object={gltf} />
  //   </Suspense>
  // )
  // console.log(jsx, 'jsx')

  return (
    <group ref={modelRef} position={[0, 10, 0]}>
      <primitive object={model.scene} />
    </group>
  )
}

export default DropModel

{
  /* <group
ref={modelRef}
position={[-2.12, 31.64, 7.34]}
// onClick={onModelClick}
>
{jsx}
</group> */
}
