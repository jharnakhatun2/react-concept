import { Component } from "react";

export default class Counter extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState((preNumber) => ({
      count: preNumber.count + 1,
    }));
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };
  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.increment, this.decrement);
  }
}
