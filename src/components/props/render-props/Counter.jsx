import React from "react";

class Counter extends React.Component {
  state = { count: 0 };
  increment = () => {
    this.setState((preNumber) => ({
      count: preNumber.count + 1,
    }));
  };
  render() {
    const { render } = this.props;
    const { count } = this.state;

    return render(count, this.increment);
  }
}
export default Counter;
