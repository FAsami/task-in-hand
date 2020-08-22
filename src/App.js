import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import React, { Component } from 'react';
const { v4: uuidv4 } = require('uuid');
export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false,
    });
  };
  handleDelete = (id) => {
    this.setState({ items: this.state.items.filter((item) => item.id !== id) });
  };
  handleEdit = (id) => {
    const item = this.state.items.find((item) => item.id === id);
    this.setState({
      item: item.title,
      items: this.state.items.filter((item) => item.id !== id),
      editItem: true,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mt-4 mx-auto">
              <TodoInput
                item={this.state.item}
                editItem={this.state.editItem}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <TodoList
                items={this.state.items}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
