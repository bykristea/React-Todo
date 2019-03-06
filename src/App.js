import React from 'react';
import './index';
import TodoForm from './components/TodoComponents/TodoForm';
import List from './components/TodoComponents/List';
import './components/TodoComponents/Todo.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state ={
      message: 'Jot your To Do items Here',
      newTodo: '',
      todos: [{
        title: 'Make App in React',
        done: false
      }, {
        title: 'Style App',
        done: false
      }]
    };
  }

  newTodoChanged(event)  {
    this.setState({
       newTodo: event.target.value 
      });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
      title: this.state.newTodo,
       done: false   
      }]
      });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos [index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <TodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)} />
          <button onClick={() => this.allDone()}>All Done</button>

        <List 
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)} />
        
      </div>
    );
  }
}

export default App;
