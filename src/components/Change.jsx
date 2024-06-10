/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Change = () => {
    const [username,setName] = useState("");
    const [age,setAge] = useState(0);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [gender,setGender] = useState("");
    const [ship,setShip] = useState("");
  return (
    <div className='px-8 py-12'>
        <input className='p-2 text-left outline outline-blue-500 rounded-lg' type="text" name="" id="" value={username} onChange={(e)=>setName(e.target.value)}/>
        <p>Name: {username}</p>

        <input className='p-2 text-left outline outline-blue-500 rounded-lg' type="number" name="" id="" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <p>Age: {age}</p>

        <textarea className='p-2 text-left outline outline-blue-500 rounded-lg' name="" rows={10} cols={32} id="" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
        <p>{comment}</p>

        <select name="" id="" value={payment} onChange={(e)=>setPayment(e.target.value)} className='p-2 text-left outline outline-blue-500 rounded-lg'>
            <option value="" disabled>Payment method</option>
            <option value="M-pesa">M-PESA</option>
            <option value="Visa">Visa</option>
            <option value="Paypal">Paypal</option>
        </select>
        <p>Payment method: {payment}</p>

        <div className="flex flex-col space-y-3">
            <div className="flex space-x-2"><input type="radio" name="gender" aria-valuetext='Male' id="" value="Male" checked={gender === "Male"} onChange={(e)=>setGender(e.target.value)} /><p>Male</p></div>
            <div className="flex space-x-2"><input type="radio" name="gender" aria-valuetext='Male' id="" value="Female" checked={gender === "Female"} onChange={(e)=>setGender(e.target.value)} /><p>Female</p></div>
            <p>{gender}</p>
        </div>
        <div className="flex flex-col space-y-3">
            <div className="flex space-x-2"><input type="radio" name='delivery' value="delivery" checked={ship === "delivery"} onChange={(e)=>setShip(e.target.value)} /><p>Delivery</p></div>
            <div className="flex space-x-2"><input type="radio" name='pickup' value="pickup" checked={ship === "pickup"} onChange={(e)=>setShip(e.target.value)}/><p>Pick-up</p></div>
            <p>{ship}</p>
        </div>
        
      
    </div>
  )
}

export default Change
