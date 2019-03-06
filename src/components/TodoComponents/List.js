// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        )
      })}
    </ul>
  );
};
export default List;