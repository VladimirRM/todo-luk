import React from "react";

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
    return (
      <div className="App">
        <h1 className="top">Active tasks: {}</h1>
      </div>
    );
  }
}

export default App;
