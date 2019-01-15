import React from "react";
import "./style.scss";

const Checkbox = ({ title, completed, id }) => (
  <div className="checkbox">
    <input type="checkbox" checked={completed} id={id} />
    <label className="task__name" htmlFor={id}>
      {title}
    </label>
  </div>
);

export default Checkbox;
