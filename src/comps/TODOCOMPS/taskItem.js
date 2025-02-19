import React from 'react';

function TaskItem(props) {
  return (
    <div className="shadow my-2 p-2">
      <button onClick={()=>{props.removeSingleTask(props.item.id)}} className="btn btn-danger float-end">X</button>
      <h4 style={{color: "white"}}>{props.item.name} - {props.item.time}</h4>
    </div>
  )
}

export default TaskItem
