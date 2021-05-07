import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../store/actions";

class TodoApp extends Component {
  state = {
    todoText: "",
    todoList: [],
  };
  render() {
    return (
      <div className="todo-page">
        <div className="todo-form">
          <h6>Todo App</h6>
          <input
            placeholder="ToDo text"
            type="text"
            value={this.state.todoText}
            onChange={this.onTextChange}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>

        <div className="todo-list">
          <h6>Pending Todo's</h6>
          <p>You have {this.props.todoItems.length} pending Todos.</p>

          <div>
            {this.props.todoItems.map((t, index) => (
              <div key={index}>
                <h6>
                  {t}
                  <button onClick={() => { this.removeTodoByIndex(index) }} 
                  className="btn btn-sm btn-danger">Remove</button>
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  removeTodoByText = (todoText) => {
    this.props.removeTodo(todoText);
  }

  removeTodoByIndex = (index) => {
      //this.props.removeTodo(index);
  }

  onTextChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  handleAddClicked = () => {
    var copy = [...this.state.todoList];
    copy.push(this.state.todoText); //not recommended

    // dispatch action
    this.props.addTodo(this.state.todoText);

    this.setState({ todoText: "" });

    
  };
}

/**
 * connect expects 2 params:
 * 1- a function to map what you want to READ
 * 2- list of actions you want to DISPATCH
 */

const mapStateToProps = (state) => {
    return {
        todoItems: state.todo
    };
};

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoApp);
