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
            completed: true
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

//Toggle Complete
markComplete = (id) => {
  console.log(id)
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id===id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
}
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
            <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
