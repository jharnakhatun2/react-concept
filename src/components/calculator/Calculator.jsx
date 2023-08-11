import React from "react";
import { convert } from "../../lib/converter";
import Temperature from "./Temperature";
import BoilerVerdict from "./BoilerVerdict";

export default class Calculator extends React.Component {
  state = { temperature: "", scale: "c" };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    //props destructions
    const { temperature, scale } = this.state;
    //celsius to fahrenheit conversion
    const celsius =
      scale === "f" ? convert(temperature.toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature.toFahrenheit) : temperature;
    return (
      <div>
        <Temperature
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <Temperature
          scale="c"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilerVerdict />
      </div>
    );
  }
}
