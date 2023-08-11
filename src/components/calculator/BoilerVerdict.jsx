export default function BoilerVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>Water will boiled</p>;
  }
  return <p className="">Water not boiled</p>;
}
