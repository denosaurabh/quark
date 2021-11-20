import { useGun, user as authUser } from '@/store/gun'

const Me = () => {
  const { setUserAlias, user } = useGun(({ setUserAlias, user }) => ({
    setUserAlias,
    user,
  }))

  const signOut = () => {
    authUser.leave()
    setUserAlias('')
  }

  return (
    <div>
      {authUser ? (
        <div>
          <h1>Your account</h1>
          <p>{user.alias}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <p>No Account found</p>
      )}
    </div>
  )
}

export default Me
