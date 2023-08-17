import { useEffect } from "react";
import { useState } from "react";

export default function Basic() {
  const [smallScreen, setSmallScreen] = useState(false);

  const checkScreenWidth = () => {
    setSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div>
      <h1>This is component for {smallScreen ? "small" : "large"} screen</h1>
    </div>
  );
}
