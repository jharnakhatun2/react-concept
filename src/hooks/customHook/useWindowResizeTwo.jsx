import { useEffect, useState } from "react";

const useWindowResize = (screenWidth) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setSmallScreen(window.innerWidth < screenWidth);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [screenWidth]);
  return smallScreen;
};
export default useWindowResize;
