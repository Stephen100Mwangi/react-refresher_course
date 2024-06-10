/* eslint-disable no-unused-vars */
import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className='border border-red-500 p-8'>
      <h1>Component B</h1>
      <ComponentC />
    </div>
  )
}

export default ComponentB
