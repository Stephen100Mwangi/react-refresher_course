/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

const DigitalClock = () => {
    const [time,setTime] = useState(new Date());
    const [hours,setHours] = useState();
    const [minutes,setMinutes] = useState();
    const [seconds,setSeconds] = useState();
    const [meridian,setMeridian] = useState();

   
    function formatTime (){
        const hr = time.getHours() >= 10 ? time.getHours(): `0${time.getHours()}`;
        const mn = time.getMinutes() >= 10 ? time.getMinutes(): `0${time.getMinutes()}`;
        const sec = time.getSeconds() >= 10 ? time.getSeconds(): `0${time.getSeconds()}`;

        setHours(hr);
        setMinutes(mn);
        setSeconds(sec);
        setMeridian(hours >= 12 ? 'PM': 'AM');

    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return ()=>{
            formatTime();
            clearInterval(intervalID);
        }
    
    }, [time]);

   


    
    
  return (
    <div id='digital' className='h-screen w-full my-16 flex items-center justify-center'>
        <div className="clock flex justify-center items-center space-x-3 text-5xl font-bold p-4">
            <div className="hours">{hours}:</div>
            <div className="minutes text-red-500">{minutes}:</div>
            <div className="seconds text-emerald-500">{seconds}</div>
            <div className="am-pm text-sm">{meridian}</div>
        </div>
      
    </div>
  )
}

export default DigitalClock
