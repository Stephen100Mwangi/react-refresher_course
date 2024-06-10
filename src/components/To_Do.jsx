/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsFileArrowDown, BsFileArrowUp } from 'react-icons/bs';
import { IoTrashBin } from 'react-icons/io5';

const To_Do = () => {
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    const addTask = ()=>{
        // To remove empty inputs
        if (newTask.trim() !== "") {
            setTasks(t => [...tasks,newTask]);
            setNewTask("");
        }

    }

    const deleteTask = (index)=>{
        setTasks(t => t.filter((_,i) => i !== index))

    }

    const moveUp = (index)=>{
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
            
        }

    }
    const moveDown = (index)=>{
        if (index < tasks.length -1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index +1],updatedTasks[index]];
            setTasks(updatedTasks);
            
        }

    }

  return (
    <div className='mx-8 my-12'>
        <h1 className='font-bold text-black text-3xl'>Plan your <span className='text-red-500'>Schedule</span></h1>
        <div className="tasks my-8">
            {
               tasks.map((item,index) => <div key={index} className='flex space-x-3 items-center justify-start'>
                <div>{index +1}</div>
                <div className='w-64'>{item}</div>
                <div onClick={()=>moveUp(index)} className='text-xl text-emerald-500 cursor-pointer'><BsFileArrowUp /></div>
                <div onClick={()=>moveDown(index)} className='text-xl text-red-500 cursor-pointer'><BsFileArrowDown /></div>
                <div onClick={()=>deleteTask(index)} className='text-xl text-red-500 cursor-pointer'><IoTrashBin /></div>
               </div>)
            }
        </div>
        <div className="addTasks flex items-center justify-center space-x-0 w-fit my-8">
            <input 
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
                type="text" placeholder='Add task here'
                className="px-6 p-2 rounded-l-lg outline-[2px] -outline-offset-1 outline-green-500"
            />
            <button onClick={addTask} className='px-6 p-2 rounded-r-lg bg-slate-500'>Add Task</button>
        </div>
      
    </div>
  )
}

export default To_Do
