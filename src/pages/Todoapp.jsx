import React, { useState } from 'react';

function Todoapp(props) {
    const [note,setNote] = useState("");    //which user i/p box will write down
    const [notes,setNotes] = useState([]);  //all notes list
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);

    const addTask=()=>{
        if(task === ""){
            return;
        }
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
    const toggleComplete =  (index)=>{
        const updatedTasks = [...tasks];
        updatedTasks[index].completed =!updatedTasks[index].completed;
        setTasks(updatedTasks);
    }
    const toggleLock=(index)=>{
        const updated=[...notes];
        updated[index].locked=!updated[index].locked;
        setNotes(updated);
    }
    const addNote = () => {
        if(note.trim()==="") return;

        const newNote={
            text:note,
            locked:false
        };
        setNotes([...notes,newNote]);
        setNote("");

        }
         const deleteNote=(index)=>{
            const updated=notes.filter((_,i)=>i !==index);
            setNotes(updated);
    }

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col items-center p-7'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-99'>
                <h1 className='text-2xl font-bold text-center mb-4'>
                     Todo App
                </h1>
        </div>
            <div>
                <input type='text'
                placeholder='Enter task...'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                className='border p-2 rounded w-70'
                />

                <button onClick={addTask}
                className='bg-blue-500 text-white px-4 py-3 rounded'
                >
                    Add
                </button>

                <button onClick={addNote}
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                >
                    Add
                    </button>
               
            </div>

            <ul className='mt-6 w-90'>
                {tasks.map((t,index)=>(
                    <li key={index}
                    className='flex justify-between items-center p-3 mb-2 shadow rounded'
                    >
                        <div>
                            <input type='checkbox'
                            checked={t.completed}
                            onChange={()=>toggleComplete(index)}
                            />
                            <span className={t.completed ? "line-through text-pink-500":""}
                                >
                                    {t.text}
                            </span>
                        </div>

                        <div>
                            <input type = "text"
                            placeholder = "Write your note..."
                            value = {note}
                            onChange={(e)=>setNote(e.target.value)}
                            className="border p-2 rounded"
                            />
                        </div>

                        <button onClick={()=>deleteTask(index)}
                            className='text-pink-300'
                            >
                                DeleteTask
                        </button>

                        <button onClick={()=>deleteNote(index)}>
                            DeleteNote
                        </button>

                        <button onClick={()=>toggleLock(index)}>
                            {t.locked ? "Unlock":"Lock"}
                        </button>

                        <h2>Tasks</h2>
                        <input placeholder="Enter task..."
                            value={task}
                            onChange={(e)=>setTask(e.target.value)}
                        />

                        <button onClick={addTask} >
                        Add Task
                        </button>

                        <h2>Secure Notes</h2>   
                        <input placeholder='Write note...'
                        value={note}
                        onChange={(e)=>setNote(e.target.value)}
                        />

                        <button onClick={addNote}>
                        Add Note
                        </button>

                        <div className='p-7'>
                            <h1 className='text-2xl font-bold m-5'>
                                Secure Notes App
                            </h1>
                            {/* <input .../> */}
                            <button>Add</button>
                            <ul>
                                notes list
                            </ul>
                        </div>
                    </li> 
            ))}
            </ul>

            <ul>
                {notes.map((n,index)=>{
                    <li key={index}>
                        {n.locked ?"🔒 Locked Note":n.text}
                    </li> 
                })}
            </ul>
        </div>
    );
}

export default Todoapp;