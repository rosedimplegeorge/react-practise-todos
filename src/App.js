import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: []
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

//Delete Todo

delTodo = (id) => {
  console.log(id)
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

addTodo =(title) => {
  console.log(title)
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo= {this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
              )}/>
              <Route path="/About" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
