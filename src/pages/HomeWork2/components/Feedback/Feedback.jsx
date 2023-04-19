import { Component } from "react";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (e) => {
    this.addFeedback(e.target.dataset.param);
  };

  addFeedback = (param) => {
    this.setState((prevState) => {
      console.log(param);
      console.log(prevState[param]);
      return { [param]: prevState[param] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Дошка відгуків кафе "Expresso"</h1>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" data-param="good" onClick={this.onClick}>
            Good
          </button>
          <button type="button" data-param="neutral" onClick={this.onClick}>
            Neutral
          </button>
          <button type="button" data-param="bad" onClick={this.onClick}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </>
    );
  }
}
