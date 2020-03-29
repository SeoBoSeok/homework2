import React, { Component } from "react";

import "./Score.css";

export default class Score extends Component {
  render() {
    const { type, score, id } = this.props;
    let content = "";
    if (type === "MOVIES") {
      content = score.toFixed(1);
    } else if (type === "SONGS") {
      content = [];
      for (var i = 0; i < score; i++) {
        content.push(
          <span key={`star${id}${i}`} className="star">
            &#9733;
          </span>
        );
      }
    } else if (type === "BOOKS") {
      content = score.toFixed(1);
    } else if (type === "IT") {
      content = [];
      for (var i = 0; i < score; i++) {
        content.push(
          <span key={`star${id}${i}`} className="star">
            &#9733;
          </span>
        );
      }
    } else {
      content = score.toFixed(1);
    }
    return <div className="score">{content}</div>;
  }
}
