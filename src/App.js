import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  AddTodo = todoName => {
    this.setState(state => ({
      todos: state.todos.concat({ task: todoName, id: Date.now(), completed: false })
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="environment-container">
        <div className="todo-container">
          <h2>Welcome to your Todo App!</h2>
          <TodoList todos={todos} />
          <TodoForm AddTodo={this.AddTodo} />
        </div>
      </div>
    );
  }
}

export default App;
