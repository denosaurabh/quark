import { useEffect, useRef, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from '@/firebase/init'
import useCharacter from '@/store/character'
import CharacterBot from './characterDB'

const DBPlayers = () => {
  const [data, setData] = useState({})

  const lobby = useCharacter.getState().lobby
  const playersRef = ref(db, `lobbies/${lobby}`)

  // const playersData = useRef({ users: {} })

  // onValue(playersRef, (snapshot) => {
  //   const playersDataValue = snapshot.val()
  //   setData(playersDataValue)
  //   // console.log(playersData)
  //   // playersData.current = playersDataValue
  // })

  useEffect(() => {
    console.log('players updated')

    onValue(playersRef, (snapshot) => {
      const playersDataValue = snapshot.val()
      setData(playersDataValue)
      // console.log(playersData)
      // playersData.current = playersDataValue
    })
  }, [])

  return (
    <group dispose={null} name='all-character-bots'>
      {/* {playersData?.users &&
        Object.values(playersData.users).map((el, i) => {
          console.log(el)
          const { x, y, z } = el.position

          return <CharacterBot position={[x, y, z]} key={i} {...el} />
        })} */}
      {data?.users &&
        Object.values(data.users).map((el, i) => {
          const { x, y, z } = el.position

          if (el.name === useCharacter.getState().name) return null
          console.log(el)

          return (
            <CharacterBot
              name={el.name}
              position={[x, y, z]}
              userData={{ id: el.name }}
              key={i}
            />
          )
        })}
      {/* 
      {onValue(playersRef, (snapshot) => {
        const playersData = snapshot.val()
        // setPlayersData(playersDataValue)
        // console.log(playersData)
        playersData?.users &&
          Object.values(playersData.users).map((el, i) => {
            const { x, y, z } = el.position

            if (el.name === useCharacter.getState().name) return null
            console.log(el)

            return (
              <CharacterBot
                name={el.name}
                position={[x, y, z]}
                userData={{ id: el.name }}
                key={i}
              />
            )
          })
      })} */}

      {/* <instancedMesh args={[null, null, 10]}> */}
      {/* <CharacterBot
        name='denosaurabh'
        position={[0, 30, 0]} // [240, 5, 70]
        userData={{ id: 'char-bot-id' }}
      />
      <CharacterBot
        name='denosaurabh'
        position={[0, 40, 0]}
        userData={{ id: 'char-bot-id' }}
      />
      <CharacterBot
        name='denosaurabh'
        position={[240, 5, 70]}
        userData={{ id: 'char-bot-id' }}
      /> */}
      {/* </instancedMesh> */}
      {/* <CharacterBot
        name='denosaurabh'
        position={[240, 5, 70]}
        userData={{ id: 'char-bot-id' }}
      /> */}
    </group>
  )
}

export default DBPlayers
