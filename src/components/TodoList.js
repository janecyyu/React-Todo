// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.togoList.map((thing) => (
        <Todo key={thing.id} thing={thing} toggleTodo={props.toggleTodo}/>
      ))}
    </div>
  );
};
export default TodoList;
