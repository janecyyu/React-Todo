import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { taskName: "" };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ taskName: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.taskName);
    this.setState({taskName:""})
  };



  handleDelete = e => {
    e.preventDefault();
    this.props.removeTodo();
  }

  render() {
    return (
      <form>
        <input
          className="add-btn"
          type="text"
          name="todo"
          onChange={this.handleChange}
          value={this.state.taskName}
        />
        <button onClick={this.submit}>Add Todo</button>
        <button className="clear-btn" onClick={this.handleDelete}>Clear Completed</button>
      </form>
    );
  }
}
export default TodoForm;
