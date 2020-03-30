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
      let scoreText = "";
      if (score > 9) {
        scoreText = "six";
      } else if (score > 7) {
        scoreText = "five";
      } else if (score > 5) {
        scoreText = "four";
      } else if (score > 3) {
        scoreText = "three";
      } else if (score > 1) {
        scoreText = "two";
      } else {
        scoreText = "one";
      }
      content = (
        <div className={`ratingScore ${scoreText}`}>{score} &#9733;</div>
      );
    } else if (type === "IT") {
      let scoreText = "";
      if (score > 9) {
        scoreText = "six";
      } else if (score > 7) {
        scoreText = "five";
      } else if (score > 5) {
        scoreText = "four";
      } else if (score > 3) {
        scoreText = "three";
      } else if (score > 1) {
        scoreText = "two";
      } else {
        scoreText = "one";
      }
      content = <img src={`/images/${scoreText}.svg`} height="32" width="32" />;
    } else {
      content = score.toFixed(1);
    }
    return <div className="score">{content}</div>;
  }
}
