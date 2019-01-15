import React from "react";
import Task from "../Task";
import "./style.scss";
import AddTaskForm from "../AddTaskForm";

const Tasks = ({ tasks, addNewTask }) => (
  <div className="tasks">
    <div className="tasks-list">
      {tasks && tasks.map(task => <Task key={task.id} {...task} />)}
    </div>
    <AddTaskForm addNewTask={addNewTask} />
  </div>
);

export default Tasks;
