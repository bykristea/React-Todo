import React from 'react';
import List from './List';
import  './Todo.css';

const TodoForm = (props) => {
    return (
      <form onSubmit={props.formSubmitted}>
        <label htmlFor="newTodo">New Todo</label>
        <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo} />
        <button type="submit">Add Todo</button>
      </form>
    )
  };

export default TodoForm;