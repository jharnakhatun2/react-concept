import { useState } from "react";
import styles from "../assets/css/Logo.module.css";

export default function CssModule() {
  const [textColor, setTextColor] = useState("black");

  const pickColorRandomly = () => {
    const colors = ["red", "green", "yellow", "blue", "orange"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  return (
    <div>
      {/* css Moduler */}
      <h1 style={{ color: textColor }} className={styles.header}>
        This is my Country
      </h1>

      {/* inline style */}
      <div className="flex gap-5">
        <button
          className="button"
          onClick={() => setTextColor(pickColorRandomly())}
        >
          Text Color
        </button>

        <button className="button" onClick={() => setTextColor("black")}>
          Reset Text Color
        </button>
      </div>
    </div>
  );
}
