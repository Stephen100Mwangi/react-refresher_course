/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

const ComponentD = () => {
    const username = useContext(UserContext)
  return (
    <div className='border border-red-500 p-8'>
        <h1>Component D</h1>
        <h2>Bye {username}</h2>
    </div>
  )
}

export default ComponentD
