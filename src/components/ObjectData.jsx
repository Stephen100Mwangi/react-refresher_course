/* eslint-disable no-unused-vars */
import React from 'react'
import data from '../Data'
import PropTypes from 'prop-types'
const ObjectData = ({academics}) => {
  return (
    <div className='flex flex-col space-y-10 mx-8'>
        <div className='flex w-full justify-between'>
        {
            data.map((element) => (
                <div key={element.bioData.name} className='flex flex-col justify-start space-y-5'>
                    <div className='flex flex-col space-y-3'>
                        <p>Name: {element.bioData.name}</p>
                        <p>Age: {element.bioData.age}</p>
                        <p>Gender: {element.bioData.gender}</p>
                    </div>
                    <div className="flex space-y-3 flex-col">
                        <p>Height: {element.otherData.height}</p>
                        <p>Weight: {element.otherData.weight}</p>
                    </div>
                </div>
            ))
        }
        </div>
        <div className='flex flex-col space-y-4'>
            <p>{academics.school}</p>
            <p>{academics.course}</p>
        </div>
      
    </div>
  )
}

ObjectData.defaultProps = {
    academics:{
        school:"DeKUT",
        course:"Bsc Computer Science"
    }
    
}

ObjectData.propTypes = {
    academics: PropTypes.arrayOf(PropTypes.shape(
        {
            school: PropTypes.string,
            course: PropTypes.string
        }
    ))
}

export default ObjectData
