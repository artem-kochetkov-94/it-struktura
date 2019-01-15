import React from "react";
import "./style.scss";

const Checkbox = ({ title, checked, id, taskCompleted }) => (
  <div className="checkbox">
    <input
      type="checkbox"
      checked={checked}
      id={id}
      onChange={() => taskCompleted(id)}
    />
    <label className="task__name" htmlFor={id}>
      {title}
    </label>
  </div>
);

export default Checkbox;
