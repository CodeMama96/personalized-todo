import React, { Component } from 'react';

import CreateTodo from './components/todos/CreateTodo'

import TodosContainer from './components/todos/TodosContainer'

import './bootstrap.min.css';

class App extends Component{

  render(){
  return (
    <div className="App">
    <CreateTodo/>
    <TodosContainer />
   Hi I am the App
    </div>
  );
  }
}

export default App;
