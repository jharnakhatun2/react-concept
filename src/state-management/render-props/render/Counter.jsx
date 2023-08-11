import { Component } from "react";

export default class Counter extends Component {
  state = { money: 0 };
  increment = () => {
    this.setState((pre) => ({
      money: pre.money + 1,
    }));
  };
  render() {
    const { render } = this.props;
    const { money } = this.state;
    return render(money, this.increment);
  }
}
