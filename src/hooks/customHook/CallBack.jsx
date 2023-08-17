import { useCallback, useEffect, useState } from "react";

const useWindowResize = (screenSize) => {
  const [smallScreen, setSmallScreen] = useState(false);

  const checkScreenWidth = useCallback(() => {
    setSmallScreen(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [checkScreenWidth]);

  return smallScreen;
};
export default useWindowResize;
