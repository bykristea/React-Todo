import React from 'react';
import './index';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state ={
      message: '',
      items: []
    }
  }

  onChange = (event) => {
    this.setState({ message: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      message: '',
      items: [...this.state.items, this.state.message]
    });
  }
  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
