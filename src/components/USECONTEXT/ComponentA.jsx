/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext();

const ComponentA = () => {
    
    const [username,setUser] = useState('Steve');
  return (
    <div className='box border rounded-lg shadow-xl mx-8 my-16 p-8 w-fit border-red-500'>
        <h1>Component A</h1>
        <h2>Good Morning 👋🏽 {username}</h2>
        <UserContext.Provider value={username}>
            <ComponentB></ComponentB>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA
