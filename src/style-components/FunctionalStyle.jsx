import { useState } from "react";

export default function FunctionalStyle() {
  const [bgColor, setBgColor] = useState("lightgray");

  const pickColorRandomly = () => {
    const colors = ["red", "green", "yellow", "blue", "orange"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  return (
    <div>
      <h1>Div style with state and function</h1>
      <div
        id="div"
        style={{ background: bgColor }}
        className="w-20 h-20 border"
      ></div>
      <button
        onClick={() => setBgColor(pickColorRandomly())}
        className="button"
      >
        Change Color
      </button>
    </div>
  );
}
