import React from "react";
import "./style.scss";
import Checkbox from "../Checkbox";

const Task = ({ title, completed, id }) => (
  <div className="task">
    <Checkbox title={title} checked={completed} id={id} />
  </div>
);

export default Task;
