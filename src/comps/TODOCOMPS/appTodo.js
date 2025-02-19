import { sortBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import { LuListTodo } from "react-icons/lu";
import TaskInput from './taskInput';
import TaskList from './taskList';

function AppTodo() {

  let [tasks_ar, setTasksAr] = useState([]);

  useEffect(() => {
    if (localStorage["tasks"]) {
      setTasksAr(JSON.parse(localStorage['tasks']));
    }
  }, [])

  const addTask = (_itemTask) => {

    let sort_ar = [...tasks_ar, _itemTask];
    sort_ar = sortBy(sort_ar, "time");
    saveLocal(sort_ar);
  }

  const resetTasksAr = () => {
    saveLocal([]);
  }

  const removeSingleTask = (_delId) => {
    let ar_Without_delId = tasks_ar.filter(item => item.id != _delId);
    saveLocal(ar_Without_delId);
  }

  const saveLocal = (_ar) => {
    localStorage.setItem("tasks", JSON.stringify(_ar));
    setTasksAr(_ar);
  }

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1 style={{ color: "white" }} className="display-4 text-center">Todo list</h1>
      <div className="position-relative">
        <LuListTodo
          style={{ color: "white", fontSize: "5em", position: "absolute", top: "-75px", left: "700px" }}
        />
      </div>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput addTask={addTask} resetTasksAr={resetTasksAr} />
        <br></br>
        <TaskList tasks_ar={tasks_ar} removeSingleTask={removeSingleTask} />
      </div>
    </div>
  )
}

export default AppTodo
