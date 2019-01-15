import React from "react";
import Task from "../Task";
import "./style.scss";
import AddTaskForm from "../AddTaskForm";

const Tasks = ({ tasks, addNewTask, userId, taskCompleted }) => (
  <div className="tasks">
    <div className="tasks-list">
      {tasks &&
        tasks.map(task => (
          <Task key={task.id} {...task} taskCompleted={taskCompleted} />
        ))}
    </div>
    <AddTaskForm addNewTask={addNewTask} userId={userId} />
  </div>
);

export default Tasks;
