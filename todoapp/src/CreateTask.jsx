import React, {useState} from 'react'

export default function CreateTask(props) {
    const [task, setTask] = useState({
        title : '',
        content : ''
    })

    function detectChance(event){
       const{name, value} = event.target;

       setTask((prevTask) =>{
        return{
            ...prevTask,
            [name] : value
        };
       });
    }

    function submitTask(event){
        props.onAdd(task);
        setTask({
            title : '',
            content : ''
        })
        event.preventDefault();
    }

  return (
    <div className='todoDivArea'>
        <form className='todoDiv'>
            <input type='text' onChange={detectChance} className='form-control todoText mb-3' name='title' value={task.title} placeholder='Header'/>
            <textarea name='content' value={task.content} onChange={detectChance} className='form-control todoText mb-3' rows={3} placeholder='Add your plan...'></textarea>

            <button className='btn btn-primary todoButton' onClick={submitTask}>Add</button>
        </form>
    </div>
  )
}
