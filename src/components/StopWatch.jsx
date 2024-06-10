/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const StopWatch = () => {
    const [isRunning,setRunning] = useState(false);
    const [elapsedTime,setElapsed] = useState(0);
    const startTime = useRef(0);
    const intervalRef = useRef(null);

    useEffect(()=>{
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsed(Date.now()-startTime.current);
            }, 10);
            
        }
        return ()=>{
            clearInterval(intervalRef.current);
        }

    },[isRunning])

    const StartTime = ()=>{
        setRunning(true);
        startTime.current = Date.now() - elapsedTime;
        
    }

    const ResetTime = ()=>{
        setElapsed(0);
        setRunning(false)

    }

    const StopTime = ()=>{
        setRunning(false)

    }

    const formatTime = ()=>{
        let hours = Math.floor(elapsedTime / (1000*60*60))
        let minutes = Math.floor(elapsedTime / (1000*60)%60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");
        
        return(`${hours}:${minutes}:${seconds}:${milliseconds}`)

    }
  return (
    <div id='stopWatch' className='w-full h-screen items-center flex justify-center'>
        <div id="stopWatch flex flex-col">
            <div id="displayTime" className="w-full font-mono font-bold border rounded-lg border-emerald-500 text-3xl text-emerald-500 flex justify-center items-center my-10">{formatTime()}</div>
            <div className="flex space-x-10 items-center justify-center m-24">
                <button className='w-fit rounded-full px-6 p-2 bg-emerald-500 text-white' onClick={StartTime}>Start</button>
                <button className='w-fit rounded-full px-6 p-2 bg-blue-600 text-white' onClick={ResetTime}>Reset</button>
                <button className='w-fit rounded-full px-6 p-2 bg-red-600 text-white' onClick={StopTime}>Stop</button>
            </div>
        </div>
      
    </div>
  )
}

export default StopWatch
