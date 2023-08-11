const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
export default function Temperature({
  scale,
  temperature,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleNames[scale]}</legend>
      <input
        className="border"
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
