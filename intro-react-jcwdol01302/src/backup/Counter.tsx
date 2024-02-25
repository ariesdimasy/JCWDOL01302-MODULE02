import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount(): void {}

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button
          onClick={() => this.setState({ state: this.state.counter + 1 })}
        >
          {" "}
          Add{" "}
        </button>
      </div>
    );
  }
}
