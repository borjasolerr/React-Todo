import React from "react";
import Todo from "./Todo";
import "./Todo.css";
export default function TodoList({ todos }) {
  return todos.map((todo, idx) => (
    <div className="todo-items-container" key={todo.id} id={`task${idx}`}>
      <Todo todo={todo} />
    </div>
  ));
}
