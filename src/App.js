import React from "react";
import Task from './components/Task'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 0,
          title: "Create todo React app",
          done: false,
        },
        {
          id: 1,
          title: "Make a video about it",
          done: true,
        },
        {
          id: 2,
          title: "Create simple todo app",
          done: false,
        },
      ],
    };
  }
  render() {
    const {tasks} = this.state
    return (
      <div className="App">
        <h1 className="top">Active tasks: {tasks.length}</h1>
        {tasks.map(task=>
          <Task task={task} key={task.id}></Task>)}
      </div>
    );
  }
}

export default App;
