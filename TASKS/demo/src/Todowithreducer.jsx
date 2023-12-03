import React, { useReducer, useState } from 'react';

const initialTodo = [
  { id: 1, title: 'Html' },
  { id: 2, title: 'Css' },
  { id: 3, title: 'js' },
  { id: 4, title: 'bs5' },
  { id: 5, title: 'react' },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), title: action.title }];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    case 'EDIT':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, title: action.title } : todo
      );
    default:
      return state;
  }
};

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD', title: newTodo });
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE', id });
  };

  const editTodo = (id) => {
    setIsEditing(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditText(todoToEdit.title);
  };

  const saveTodo = (id) => {
    if (editText.trim() !== '') {
      dispatch({ type: 'EDIT', id, title: editText });
      setIsEditing(null);
      setEditText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {isEditing === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveTodo(todo.id)}>Save</button>
              </div>
            ) : (
              <div>
                {todo.title}
                <button onClick={() => editTodo(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
