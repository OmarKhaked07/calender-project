import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/main")
  }

  return (
    <div className='main'>
    <div className='auth-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='name@email.com' id='email' name='email' required/>

        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' id='password' name='password' required/>

        <button className='ripple' type='submit'>Login</button>
      </form>
      <p>Don't have an account?<button title='Register' className='link-btn' onClick={() => props.onFormSwitch("register")}>Register</button></p>
    </div>
    </div>
  )
}

export default Login