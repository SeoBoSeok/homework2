import React, { Component } from "react";
import "./TodoItem.css";
import Score from "./Score";
class TodoItem extends Component {
  //   shouldComponentUpdate(nextProps, nextState) {
  // shouldComponentUpdate update시 체크?
  // if (this.props.todo !== nextProps.todo) {
  //   return true;
  // } else return false;
  //   }
  render() {
    const { todo, type, onToggle, onPlus, onMinus, onRemove } = this.props;
    return (
      <div
        className={`TodoItem ${todo.done && "active"}`}
        onClick={() => onToggle(todo.id)}
      >
        <div className="Item__left">
          <div className="check">&#10004;</div>
        </div>
        <div className="Item__center">
          <div className="text">{todo.text}</div>
        </div>
        <div className={`Item__right ${type}`}>
          <Score type={type} score={todo.score} id={todo.id} />
          <span
            className="plus"
            onClick={e => {
              e.stopPropagation();
              onPlus(todo.id, todo.type);
            }}
          >
            &#10133;
          </span>
          <span
            className="minus"
            onClick={e => {
              e.stopPropagation();
              onMinus(todo.id, todo.type);
            }}
          >
            &#10134;
          </span>
          <span
            className="remove"
            onClick={e => {
              e.stopPropagation();
              onRemove(todo.id);
            }}
          >
            &#10008;
          </span>
        </div>
      </div>
    );
  }
}
export default TodoItem;
