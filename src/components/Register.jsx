import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState(true)
  const [name, setName] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password === passwordConfirm){
      navigate("/main")
      setError(true)
    }
    else(
      setError(false)
    )
  }

  return (
    <div className='main'>
    <div className='auth-form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Enter your name' id='name' name='name' required/>

        <label htmlFor="email">Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='name@email.com' id='email' name='email' required/>

        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' id='password' name='password' required/>

        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type="password" placeholder='Confirm Password' id='passwordConfirm' name='passwordConfirm' required/>

        <button className='ripple' type='submit'>Register</button>

        {
          error ? <p></p> : <p className='error-mes'>Passwords don't Match</p>
        }
      </form>
      <p>Already have an account?<button title='Login' className='link-btn' onClick={() => props.onFormSwitch("login")}>Login</button></p>
    </div>
    </div>
  )
}

export default Register