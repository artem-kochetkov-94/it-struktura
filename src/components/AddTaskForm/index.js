import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "./style.scss";

class AddTaskForm extends React.Component {
  state = {
    open: false,
    taskName: "",
    error: null
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.preventDefault();

    let error = null;

    const { addNewTask, userId } = this.props;
    const { taskName } = this.state;

    if (!taskName.length) {
      error = "Введите название задачи";
    }

    if (error) {
      this.setState({
        error
      });

      return;
    }

    if (this.state.error) {
      this.setState({
        error: ""
      });
    }

    addNewTask(userId, taskName);
  };

  taskNameHandleChange = e => {
    this.setState({
      taskName: e.target.value
    });
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="task-add"
          onClick={this.handleClickOpen}
        />
        <Dialog
          onClose={this.handleClose}
          open={this.state.open}
          classes={{ paper: "popup" }}
        >
          <div className="add-task-form">
            <form onSubmit={this.handleSubmit}>
              <p className="add-task-form__title">Add New Task</p>
              <div className="add-task-form__form-group">
                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.taskName}
                    onChange={this.taskNameHandleChange}
                  />
                  {this.state.error && <p>{this.state.error}</p>}
                </div>
              </div>
              <div className="add-task-form__button">
                <button
                  type="submit"
                  className="button button--primary button--full-width"
                >
                  OK
                </button>
              </div>
              <button
                type="button"
                className="add-task-form__close"
                onClick={this.handleClose}
              />
            </form>
          </div>
        </Dialog>
      </>
    );
  }
}

export default AddTaskForm;
