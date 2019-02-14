import React from "react";
import "./Todo.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInputValue: ""
    };
  }

  ChangeHandler = event => {
    this.setState({ todoInputValue: event.target.value });
  };

  AddTodoButtonClick = () => {
    this.props.AddTodo(this.state.todoInputValue);
    this.ClearInputField();
  };

  AddTodoEnterPress = event => {
    if (event.key === "Enter") {
      this.props.AddTodo(this.state.todoInputValue);
      this.ClearInputField();
    }
  };

  ClearInputField = () => {
    this.setState({ todoInputValue: "" });
  };

  render() {
    return (
      <div onKeyPress={this.AddTodoEnterPress}>
        <input type="text" placeholder="...todo" value={this.state.todoInputValue} onChange={this.ChangeHandler} />
        <button onClick={this.AddTodoButtonClick}>Add todo</button>
        <button>Clear completed</button>
      </div>
    );
  }
}
