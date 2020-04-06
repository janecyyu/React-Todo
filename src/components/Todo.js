import React from "react";

const Todo = (props) => {
  return (
    <div onClick={()=>props.toggleTodo(props.thing.id)}
    className={props.thing.completed?"completed":"uncompleted"}>
      <p>{props.thing.task}</p>
    </div>
  );
};
export default Todo;
