import React from "react";

const buttonText = {
  v: "View More",
  c: "Click Me",
  s: "Show Details",
};
export default class Button extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <button className="bg-gray-600 text-white px-5 py-2 rounded my-2">
        {buttonText[text]}
      </button>
    );
  }
}
