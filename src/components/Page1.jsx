import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../content'

const Page1 = () => {

  const { color, name } = useGlobalContext()

  return (
    <div style={{backgroundColor: color,height: '50px'}}>
      {name}
      <Link to={"/main"}>Main</Link>
    </div>
  )
}

export default Page1