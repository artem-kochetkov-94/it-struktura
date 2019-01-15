import React from "react";
import Tasks from "../components/Tasks";

export default class extends React.Component {
  state = {
    tasks: [],
    userId: 1
  };

  componentDidMount() {
    this.fetchTasksByUserId(this.state.userId);
  }

  fetchTasksByUserId = userId => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then(response => response.json())
      .then(response => {
        const userTasks = response.filter(task => task.userId === userId);

        this.setState({
          tasks: userTasks
        });
      })
      .catch(reason => console.log(reason));
  };

  addNewTask = userId => {
    fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "POST",
      body: {
        title: "title",
        userId,
        completed: false
      }
    })
      .then(response => console.log("REQUEST SUCCESS"))
      .catch(reason => console.log("REQUEST FAILURE"));
  };

  render() {
    return (
      <Tasks
        tasks={this.state.tasks}
        userId={this.state.userId}
        addNewTask={this.addNewTask}
      />
    );
  }
}
