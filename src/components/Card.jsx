/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Card = ({username,text,image}) => {
  return (
    <div className='flex min-h-[280px] flex-col space-y-5 shadow-xl rounded-lg w-fit max-w-[240px] items-center justify-center p-6 m-4 border-t-black border-1'>
      <img src={image} alt="" width={100} height={100} className='rounded-full'/>
      <div className='flex items-center flex-col space-y-3'>
        <h1 className='text-xl font-semibold text-red-500'>{username}</h1>
        <p className='font-extralight'>{text}</p>
      </div>
    </div>
  )
}

// PropTypes
Card.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
}

Card.defaultProps = {
    username: "Anonymous",
    text: "Anonymous is here",
    image: "https://picsum.photos/20",
}



export default Card
