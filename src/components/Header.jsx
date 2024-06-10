/* eslint-disable no-unused-vars */
import React from 'react'

const Header = () => {
    const myDate = new Date();
    const myDay = myDate.getDay();
    const myDate2 = myDate.getDate();
    const myMonth = myDate.getMonth();
    const myYear = myDate.getFullYear();
    const myHour = myDate.getHours();
    const myMinutes = myDate.getMinutes();
    const mySeconds = myDate.getSeconds();
  return (
    <div className='w-full flex items-center justify-center flex-col space-y-5'>
        <div className="text-3xl text-semibold text-red-500">ReactJS Crash Course</div>
        <ul className='flex gap-5 w-full justify-end p-3'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>
        <div className='w-full flex justify-end items-center space-x-3 px-3'>
            <p className='text-lg font-semibold text-black'>
                {
                    myDay === 1 ? <h1>Monday</h1> : myDay === 2 ? <h1>Tuesday</h1> : myDay === 3 ? <h1>Wednesday</h1>: myDay === 4 ? <h1>Thursday</h1>: myDay === 5 ? <h1>Friday</h1>: myDay === 6 ? <h1>Saturday</h1>: <h1>Sunday</h1>
                }
            </p>
            <p>
                {
                    myDate2
                }
                {
                    myMonth === 0 ? ", January": myMonth === 1 ? ", February": myMonth === 2 ? ", March": myMonth === 3 ? ", April" : myMonth === 4 ? ", May ": myMonth === 5 ? ", June" :""
                }
                { 
                myYear
                }
            </p>
        </div>
      
    </div>
  )
}

export default Header
