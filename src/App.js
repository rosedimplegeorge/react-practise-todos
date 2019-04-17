import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'Make Breakfast',
            completed: false
        },
        {
            id: 2,
            title: 'Iron Clothes',
            completed: false
        },
        {
            id: 3,
            title: 'Pack Lunch boxes',
            completed: false
        },
        {
            id: 4,
            title: 'Takeout trash and Keep',
            completed: false
        }
    ]
}
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
            <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
