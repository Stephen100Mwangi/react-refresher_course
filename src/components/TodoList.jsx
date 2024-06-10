/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { IoTrashBin } from "react-icons/io5";
import { BsBookmarkCheckFill } from "react-icons/bs";

const TodoList = () => {
    const [myTasks,setTasks] = useState([""]);
    const addTask = ()=> {
        const newTask = document.getElementById("task").value;
        setTasks(t => [...t,newTask]);
        document.getElementById("task").value = "";

    }

    const deleteTask = (index) => {
        setTasks(myTasks.filter((_,i) => i !== index))
    }
  return (
    <div className='mx-8 my-10 flex flex-col space-y-5'>
        <div className="text-3xl text-black font-bold">Todo List <span className="text-3xl text-red-500 decoration-4 decoration-red-500 decoration-slice">Keep track </span> of your activities</div>
        <div className="flex flex-col space-y-5">
            {
                myTasks.map((task,index) => (
                    <div key={index} className='flex justify-start items-center space-x-3'>
                        <div>{task}</div>
                        <div className="flex justify-center items-center text-red-500 cursor-pointer" onClick={() => deleteTask(index)}><IoTrashBin /></div>
                        <div className="flex justify-center items-center cursor-pointer" onClick={{style:{color:"green"}}}><BsBookmarkCheckFill /></div>

                    </div>
                ) )
            }

        </div>
        <div className="flex space-x-3">
            <input type="text" name="" id="task" placeholder='Add Task here' className='px-6 p-2 rounded-lg outline outline-green-500' />
            <button onClick={addTask} className='w-fit px-6 bg-green-500 text-white rounded-lg'>Add Task</button>
        </div>
      
    </div>
  )
}

export default TodoList
