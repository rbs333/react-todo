import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Email Justin',
        completed: false
      },
      {
        id: 3,
        title: 'Call Maggie',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }

  delTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
