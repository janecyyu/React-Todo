import React from "react";
import { Button } from 'reactstrap';

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
      <form className="form">
        <input
          className="add-btn"
          type="text"
          name="todo"
          onChange={this.handleChange}
          value={this.state.taskName}
          placeholder="add todo here"
        />
        <Button color="info" onClick={this.submit}>Add Todo</Button>
        <Button color="warning" className="clear-btn" onClick={this.handleDelete}>Clear Completed</Button>
      </form>
    );
  }
}
export default TodoForm;
