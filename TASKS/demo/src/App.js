import React from 'react';
import Todo from './Todo';
import Model from './Model';
import Cssanimation from './Cssonclick';
import Togglecolor from './Changecolor';
import MultipleElement from './MultipleElement';
import TodoList from './Todowithreducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <div>
      <h1>Task 1 get an array an apply css animation on clickable array element</h1>
      <hr />
      <br /><br />
      <Cssanimation />
      <h1>Task 2 todo list normal</h1>
      <hr />
      <br /><br />

      <Todo/>
      <h1>Task 3 open model on click</h1>
      <hr />
      <br /><br />

      <Model/>
      <h1>Task 4 color change on click</h1>
      <hr />
      <br /><br />

      <Togglecolor/>
      <h1>Task 5 usereducer todo</h1>
      <hr />
      <br /><br />

      <TodoList/>
    </div>
  )
}

export default App
