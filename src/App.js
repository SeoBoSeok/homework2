import React, { Component } from "react";
import "./App.css";
import Form from "./components/CreateForm";
import List from "./components/TodoList";
import Toast from "light-toast";
import uuid from "react-uuid";

const TYPE = "MOVIES"; // 'MOVIES' 'SONGS' 'BOOKS' 'IT'

const TYPEINFO = {
  MOVIES: {
    MAX_SCORE: 9.9,
    STEP: 0.1
  },
  SONGS: {
    MAX_SCORE: 5,
    STEP: 1
  },
  BOOKS: {
    MAX_SCORE: 10,
    STEP: 1
  },
  IT: {
    MAX_SCORE: 10,
    STEP: 1
  }
};

class App extends Component {
  state = {
    all: [],
    todos: [],
    type: TYPE
  };
  handleInsert = text => {
    const id = uuid();
    this.setState({
      all: this.state.all.concat({
        text: text,
        id: id,
        score: 0,
        done: false,
        type: this.state.type
      }),
      todos: this.state.todos.concat({
        text: text,
        id: id,
        score: 0,
        done: false,
        type: this.state.type
      })
    });
  };
  handleToggle = id => {
    this.setState({
      all: this.state.all.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else return todo;
      }),
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else return todo;
      })
    });
  };
  handlePlus = (id, type) => {
    const findIndexAll = this.state.all.findIndex(item => item.id === id);
    if (
      this.state.all[findIndexAll].score + TYPEINFO[type].STEP >
      TYPEINFO[type].MAX_SCORE
    ) {
      Toast.info(
        `MAX 값 이상으로 올릴 수 없습니다. MAX 값은 ${TYPEINFO[type].MAX_SCORE}입니다`,
        500
      );
      return;
    }
    this.state.all[findIndexAll].score =
      this.state.all[findIndexAll].score + TYPEINFO[type].STEP;
    this.setState({
      all: this.state.all,
      todos: this.state.all.filter(item => item.type === type)
    });
  };
  handleMinus = (id, type) => {
    const findIndexAll = this.state.all.findIndex(item => item.id === id);
    if (this.state.all[findIndexAll].score - TYPEINFO[type].STEP < 0) {
      Toast.info(`0 이하로 내려갈 수 없습니다`, 500);
      return;
    }
    this.state.all[findIndexAll].score =
      this.state.all[findIndexAll].score - TYPEINFO[type].STEP;
    this.setState({
      all: this.state.all,
      todos: this.state.all.filter(item => item.type === type)
    });
  };
  handleRemove = id => {
    this.setState({
      all: this.state.all.filter(todo => todo.id !== id),
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
  handleChangeType = type => {
    this.setState({
      todos: this.state.all.filter(item => item.type === type),
      type: type
    });
  };
  render() {
    return (
      <div className="App">
        <div className="sideBtn">
          <button
            className={this.state.type === "MOVIES" ? "active" : ""}
            onClick={() => this.handleChangeType("MOVIES")}
          >
            MOVIES
          </button>
          <button
            className={this.state.type === "SONGS" ? "active" : ""}
            onClick={() => this.handleChangeType("SONGS")}
          >
            SONGS
          </button>
          <button
            className={this.state.type === "BOOKS" ? "active" : ""}
            onClick={() => this.handleChangeType("BOOKS")}
          >
            BOOKS
          </button>
          <button
            className={this.state.type === "IT" ? "active" : ""}
            onClick={() => this.handleChangeType("IT")}
          >
            IT
          </button>
        </div>
        <h3>LIST OF {this.state.type}</h3>
        <Form onInsert={this.handleInsert} type={this.state.type} />
        <List
          todos={this.state.todos}
          type={this.state.type}
          onToggle={this.handleToggle}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}
export default App;
