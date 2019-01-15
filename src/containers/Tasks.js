import React from "react";
import Tasks from "../components/Tasks";

export default class extends React.Component {
  state = {
    tasks: {},
    userId: 1
  };

  componentDidMount() {
    this.fetchTasksByUserId(this.state.userId);
  }

  fetchTasksByUserId = userId => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then(response => response.json())
      .then(response => {
        const tasks = response.filter(task => task.userId === userId);

        const tasksNormalize = tasks.reduce((accomulator, task) => {
          return {
            ...accomulator,
            [task.id]: task
          };
        }, {});

        this.setState({
          tasks: tasksNormalize
        });
      })
      .catch(reason => console.log(reason));
  };

  addNewTask = (userId, title) => {
    fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "POST",
      body: {
        title,
        userId,
        completed: false
      }
    })
      .then(response => response.json())
      .then(response => {
        const { id } = response;
        this.setState({
          tasks: {
            ...this.state.tasks,
            [id]: {
              id,
              userId,
              title,
              completed: false
            }
          }
        });
      })
      .catch(reason => console.log("REQUEST FAILURE"));
  };

  taskCompleted = id => {
    const { completed } = this.state.tasks[id];
    this.setState({
      tasks: {
        ...this.state.tasks,
        [id]: {
          ...this.state.tasks[id],
          completed: !completed
        }
      }
    });
  };

  render() {
    return (
      <Tasks
        tasks={Object.values(this.state.tasks)}
        userId={this.state.userId}
        addNewTask={this.addNewTask}
        taskCompleted={this.taskCompleted}
      />
    );
  }
}
