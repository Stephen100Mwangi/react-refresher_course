/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Objects = () => {
    const [car,setCar] = useState({year: 2024, make: "Ford", model: "Mustang"})
  return (
    <div className='mx-8 my-12'>

        <div>
            <label htmlFor="year">Year:</label>
            <input type="number" name="" value={car.year} id="" onChange={(e)=>setCar({...car,year:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="">Make</label>
            <input type="text" name="" value={car.make} id="" onChange={(e)=>setCar({...car,make:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="model">Model</label>
            <input type="text" name="" value={car.model} id="" onChange={(e)=>setCar(prev_car => ({...prev_car,model:e.target.value}))}/>
        </div>

        <p>Your favorite car is a {car.year} {car.make} ,{car.model}</p>
      
    </div>
  )
}

export default Objects
