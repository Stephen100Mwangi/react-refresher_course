/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

const Window = ()=>{
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        })

    },[]);

    useEffect(()=>{
        window.title = `Size: ${width} * ${height}`;
        console.log(`Size: ${width} * ${height}`);

    },[width,height])
    return(
        <div className='mx-8 my-12'>
            <p>Width {width} px</p>
            <p>Height {height} px</p>

        </div>
    )
}

export default Window