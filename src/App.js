import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todoThings = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

window.localStorage.setItem('todo', JSON.stringify(todoThings));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoThings,
    };
  }

  addTodo = (input) => {
    let i = {
      task: input,
      id: Math.floor(Math.random() * 101),
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, i],
    });
  };

  toggleTodo = (todoId) => {
    this.setState({
      todoList: this.state.todoList.map((i) => {
        if (i.id === todoId) {
          return {
            ...i,
            completed: !i.completed,
          };
        }
        return i;
      }),
    });
  };

  removeTodo = () => {
    const newList = this.state.todoList.filter((i) => i.completed === false);
    this.setState({ todoList: newList });
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Todo Today!</h2>
        </div>
        <TodoList togoList={this.state.todoList} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
