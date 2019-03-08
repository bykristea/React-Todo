import React from 'react';
import List from './List';
import  './Todo.css';

const TodoForm = (props) => {
    return (
      <form onSubmit={props.formSubmitted}>
        <label htmlFor="newTodo">Jot To Do</label>
        <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo} />
        <button type="submit">Jot</button>
      </form>
    )
  };

export default TodoForm;