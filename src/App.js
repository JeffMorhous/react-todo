import React, { Component } from 'react';
import './App.css';
import todos from './components/todos';

class App extends Component {
  state ={
    todos:[
      {
        id:1,
        title:'Take out the trash',
        completed:'false'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Todo React Application</h1>
        <Todos/>
      </div>
    );
  }
}

export default App;
