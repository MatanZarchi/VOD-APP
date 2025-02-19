import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskInput(props) {

  const nav = useNavigate();

  let nameRef = useRef();
  let timeRef = useRef();

  const onAddTask = () => {

    let todoItem = {
      name: nameRef.current.value,
      time: timeRef.current.value,
      id: Date.now() // unix time
    };

    props.addTask(todoItem);
    console.log(todoItem);
  }

  const onResetTask = () => {
    props.resetTasksAr();
  }

  return (
    <div>
      <h3 style={{color: "white"}}>Task Name:</h3>
      <input ref={nameRef} type="text" className="form-control" />
      <h3 style={{color: "white"}}>Task Time:</h3>
      <input ref={timeRef} type="time" defaultValue="09:00" className="form-control" />
      <div className="my-3 text-center">
        <button onClick={()=>{nav(-1)}} className="btn btn-success me-2" style={{backgroundColor: '#ff6347', borderColor: '#ff6347'}}>Back2VOD</button>
        <button onClick={onAddTask} className="btn btn-success me-2">Add task</button>
        <button onClick={onResetTask} className="btn btn-danger">Reset tasks</button>
      </div>

    </div>
  )
}

export default TaskInput
