import React from "react";

class ChildrenCounter extends React.Component {
  state = { count: 0 };
  increment = () => {
    this.setState((preNumber) => ({
      count: preNumber.count + 1,
    }));
  };
  render() {
    const { children } = this.props;
    const { count } = this.state;

    return children(count, this.increment);
  }
}
export default ChildrenCounter;
