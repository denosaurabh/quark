import create from 'zustand'
import produce from 'immer'
import Gun from 'gun'
import 'gun/sea'
import 'gun/axe'

export const gun = Gun({
  peers: ['http://localhost:3010/gun'],
})

// gun.put(null)

export const user = gun.user().recall({ sessionStorage: true })

interface UserI {
  alias: string
}

interface GunStore {
  user: UserI
  setUserAlias: (alias: string) => void
}

export const useGun = create<GunStore>((set) => {
  return {
    user: { alias: '' },
    setUserAlias: (alias) => {
      set(
        produce((draft) => {
          draft.user.alias = alias
        })
      )
    },
  }
})

user.get('alias').on((alias) => useGun.getState().setUserAlias(alias))

gun.get('auth').on(async (event) => {
  const userAlias = await user.get('alias')
  useGun.getState().setUserAlias(userAlias.toString())

  console.log(`signed in as ${userAlias}`)
})
