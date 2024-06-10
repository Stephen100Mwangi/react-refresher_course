/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ObjectArrays = () => {
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState("");
    const [carModel,setCarModel] = useState("");
    const [carMake,setCarMake] = useState("");

    const addCar = ()=>{
        const newCar = {
            year: carYear,
            model: carModel,
            make: carMake
        }

        setCars(c => [...c,newCar]);

        setCarMake("");
        setCarModel("");
        setCarYear("");
       
    }

    const handleDeleteCar = (index)=>{
        setCars(c => c.filter((_,i) => i !== index));

    }


  return (
    <div className='mx-8 my-12'>
        <h2 className='text-3xl font-bold text-slate-700'>List of Cars</h2>
        <ul>
            {
                cars.map((car,index) => (
                    <div key={index}>
                        <div className='flex space-x-8 justify-start my-2 items-center'>
                            <p>{car.year}</p>
                            <p>{car.make}</p>
                            <p>{car.model}</p>
                        </div>
                        <button onClick={()=>handleDeleteCar(index)} className="delete px-6 rounded-lg p-2">Delete</button>
                    </div>
                ))
            }
        </ul>
      

        <div className='flex space-y-3 flex-col justify-center items-center w-fit mr-auto'>
            <input value={carYear} onChange={(e)=>setCarYear(e.target.value)} type="date" name="" id="" placeholder='Input the year of Manufacture' className='px-4 p-2 w-64 my-2 outline outline-green-500 rounded-lg'/>
            <input value={carModel} onChange={(e)=>setCarModel(e.target.value)} type="text" name="" id="" placeholder='Input the car model' className='px-4 p-2 w-64 my-2 outline outline-green-500 rounded-lg'/>
            <input value={carMake} onChange={(e)=>setCarMake(e.target.value)} type="text" name="" id="" placeholder='Input the car make' className='px-4 p-2 w-64 my-2 outline outline-green-500 rounded-lg'/>

            <button onClick={addCar} className='w-fit px-6 rounded-lg p-2 bg-slate-900 text-white font-bold'>Add Car</button>
        </div>
    </div>
  )
}

export default ObjectArrays
