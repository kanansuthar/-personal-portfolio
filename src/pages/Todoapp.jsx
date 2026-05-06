import React, { useState } from 'react';

function Todoapp() {
    const [note,setNote] = useState("");
    const [notes,setNotes] = useState([]);
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);

    const addTask=()=>{
        if(task === "") return;

        const newTask={
            text:task,
            completed:false
        };

        setTasks([...tasks,newTask]);
        setTask("");
    };

    const deleteTask=(index)=>{
        const updatedTasks = tasks.filter((_,i)=>i !== index);
        setTasks(updatedTasks);
    };

    const toggleComplete=(index)=>{
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const addNote = () => {
        if(note.trim()==="") return;

        const newNote={
            text:note,
            locked:false
        };

        setNotes([...notes,newNote]);
        setNote("");
    };

    const deleteNote=(index)=>{
        const updated=notes.filter((_,i)=>i !==index);
        setNotes(updated);
    };

    const toggleLock=(index)=>{
        const updated=[...notes];
        updated[index].locked=!updated[index].locked;
        setNotes(updated);
    };

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col items-center p-7'>

            <h1 className='text-2xl font-bold mb-4'>Todo App</h1>

            {/* TASK INPUT */}
            <div className='mb-4'>
                <input
                    type='text'
                    placeholder='Enter task...'
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                    className='border p-2 rounded'
                />

                <button onClick={addTask}
                    className='bg-blue-500 text-white px-4 py-2 ml-2 rounded'>
                    Add Task
                </button>
            </div>

            {/* TASK LIST */}
            <ul className='mb-6 w-80'>
                {tasks.map((t,index)=>(
                    <li key={index}
                        className='flex justify-between items-center p-2 mb-2 bg-white shadow rounded'>
                        
                        <div>
                            <input type='checkbox'
                                checked={t.completed}
                                onChange={()=>toggleComplete(index)}
                            />
                            <span className={t.completed ? "line-through ml-2" : "ml-2"}>
                                {t.text}
                            </span>
                        </div>

                        <button onClick={()=>deleteTask(index)}
                            className='text-red-500'>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {/* NOTE INPUT */}
            <div className='mb-4'>
                <input
                    type='text'
                    placeholder='Write note...'
                    value={note}
                    onChange={(e)=>setNote(e.target.value)}
                    className='border p-2 rounded'
                />

                <button onClick={addNote}
                    className='bg-green-500 text-white px-4 py-2 ml-2 rounded'>
                    Add Note
                </button>
            </div>

            {/* NOTES LIST */}
            <ul className='w-80'>
                {notes.map((n,index)=>(
                    <li key={index}
                        className='flex justify-between items-center p-2 mb-2 bg-white shadow rounded'>
                        
                        <span>
                            {n.locked ? "🔒 Locked Note" : n.text}
                        </span>

                        <div>
                            <button onClick={()=>toggleLock(index)} className='mr-2'>
                                {n.locked ? "Unlock" : "Lock"}
                            </button>

                            <button onClick={()=>deleteNote(index)}
                                className='text-red-500'>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Todoapp;