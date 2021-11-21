import { useState } from 'react'
import { useGun, user as authUser } from '@/store/gun'

const Auth = () => {
  const [form, setForm] = useState({
    alias: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const login = (e) => {
    if (e) e.preventDefault()

    authUser.auth(form.alias, form.password, ({ err }) => err && alert(err))
  }

  const signUp = (e) => {
    e.preventDefault()

    authUser.create(form.alias, form.password, ({ err }) => {
      if (err) {
        alert(err)
      } else {
        login(e)
      }
    })
  }

  return (
    <div>
      <h1>Auth</h1>
      <form>
        <input
          type='text'
          placeholder='username'
          name='alias'
          value={form.alias}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={form.password}
          onChange={handleChange}
        />

        <button onClick={signUp}>Signup</button>
        <br />
        <button onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Auth
