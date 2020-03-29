import React, { Component } from "react";
import Toast from "light-toast";
import { debounce } from "lodash";

import "./CreateForm.css";

function startsWithVowel(word) {
  return /[aeiou]/i.test(word[0]);
}

class CreateForm extends Component {
  state = {
    input: ""
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.input) {
      Toast.info("내용을 입력해주세요", 500);
      return;
    }
    this.props.onInsert(this.state.input);
    this.setState({
      input: ""
    });
  };
  render() {
    const { type } = this.props;
    const checkVowel = startsWithVowel(type);
    return (
      <div className="CreateForm">
        <form className="form_container" onSubmit={this.handleSubmit}>
          <input
            tpye="text"
            placeholder={`add ${checkVowel ? "an" : "a"} ${type}`}
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
