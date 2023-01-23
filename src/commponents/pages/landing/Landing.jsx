import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'



const Landing = () => {
  const {userData}=useContext (AuthContext)

  return (
    <div>
      <h1>Bienvenido  {userData.name} {" "} {userData.lastName}</h1>

    </div>
  )
}

export default Landing