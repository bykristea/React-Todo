import React from 'react';
import List from './List';
import  './Todo.css';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render () {
        return (
             <div>
                <List items={this.state.items} />
                 <form className="App" onSubmit={this.onSubmit}>
                     <input valu={this.state.term} onChange={this.onChange} />
                    <button>Enter</button>
                </form>
                
            </div>
            );
    }
}

export default TodoForm;