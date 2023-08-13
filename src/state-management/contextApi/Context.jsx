import { createContext } from "react";

export const TestData = createContext();
export default function Context({ children }) {
  const name = "Jharna";
  const obj = {
    love: "pure",
    game: "serious",
  };
  const data = {
    name,
    obj,
  };
  return <TestData.Provider value={data}>{children}</TestData.Provider>;
}

// wrap Context to main.jsx as if all site can excess this context data
