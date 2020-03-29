import React, { Component } from "react";
import "./TodoList.css";
import Item from "./TodoItem";
class TodoList extends Component {
  render() {
    const { todos, type, onToggle, onPlus, onMinus, onRemove } = this.props;
    return (
      <div className="TodoList">
        {todos.map(todo => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              type={type}
              onToggle={onToggle}
              onPlus={onPlus}
              onMinus={onMinus}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    );
  }
}
export default TodoList;
