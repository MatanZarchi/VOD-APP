import React from 'react';
import TaskItem from './taskItem';

function TaskList(props) {

  
  return (
    <div>
      <h2 style={{color: "white"}}>Tasks you added:</h2>
      {props.tasks_ar.map(item => {
        return(
          <TaskItem removeSingleTask={props.removeSingleTask} key={item.id} item={item}></TaskItem>
        );
      })}
    </div>
  )
}

export default TaskList
