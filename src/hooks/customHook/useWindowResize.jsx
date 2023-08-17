import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const checkScreenWidth = () => {
    setSmallScreen(window.innerWidth < 750);
  };
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return smallScreen;
};
export default useWindowResize;
