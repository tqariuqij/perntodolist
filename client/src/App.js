import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './component/InputTodo';
import ListTodos from './component/ListTodos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
