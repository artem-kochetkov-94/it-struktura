import React from "react";
import "./style.scss";
import Checkbox from "../Checkbox";

const Task = ({ title, completed, id, taskCompleted }) => (
  <div className="task">
    <Checkbox
      title={title}
      checked={completed}
      id={id}
      taskCompleted={taskCompleted}
    />
  </div>
);

export default Task;
