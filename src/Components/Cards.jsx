import React, { useState } from 'react'

function Cards() {
  const [task, setTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const [MaintaskName, setmainTaskName] = useState([]);
  const submitHandelr = (e) => {
    // console.log(task,taskName)
    e.preventDefault();
    setmainTaskName([...MaintaskName, { task, taskName }])
    console.log(MaintaskName)
    setTask(" ");
    setTaskName(" ");
  };
  let rendertask = <h2>Add Task</h2>;

  if (MaintaskName.length > 1) {
    rendertask = MaintaskName.map((item, index) => {
      return (
        <div key={index} className='relative max-w-[250px] h-80 inline-block pt-6 bg-slate-700 rounded-2xl'>
          <h1 className='overflow-hidden text-center text-3xl font-bold leading-none tracking-tight text-zinc-400 border-b-[1px] border-zinc-500 pb-2'>{item.task || "ADD Your task"} </h1>
          <h2 className='px-2 mt-6'>{item.taskName || "ADD Your taskName"}</h2>
          <button className='absolute bottom-0 py-2 text-xl uppercase font-semibold text-zinc-400 bg-zinc-600 overflow-hidden rounded-b-lg w-full'>Delete</button>
        </div>
      );
    });
  }
  


  return (
    <div>
        <h2 className='text-center pt-5 text-zinc-400 font-bold text-6xl'>To Do List</h2>
        <form onSubmit={submitHandelr} action="" className='w-[75%] m-auto mt-10 flex justify-evenly border-b-[1px] border-zinc-500 pb-10'>
         <input onChange={(e)=>{setTask(e.target.value)}} value={task} className='bg-transparent h-10 w-80 pl-2 border-[1px] rounded-md border-zinc-400 font-light text-zinc-400 ' type="text" placeholder='Task Name' />
         <input onChange={(e)=>{setTaskName(e.target.value)}} value={taskName} className='bg-transparent h-10 w-80 pl-2 border-[1px] rounded-md border-zinc-400 font-light text-zinc-400 ' type="text" placeholder='Task Name' />
          <button className='bg-zinc-400 px-10 py-2 rounded-lg text-zinc-1000 uppercase tracking-tight	'>Submit</button>
        </form>
        <div className='w-full relative flex gap-8'>
           
         {rendertask}

          
        </div>
    </div>
  )
}

export default Cards;