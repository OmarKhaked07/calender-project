import React,{ useState } from 'react'
import Login from './Login';
import Register from './Register';

const Home = () => {

  const [currentform, setCurrentform] = useState("login")

  const toogleForm = (formName) => {
    setCurrentform(formName)
  }

  return (
    <div>
      {
        currentform === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
      }
    </div>
  )
}

export default Home