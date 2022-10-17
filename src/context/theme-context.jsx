import React, { useEffect, useState } from "react";
import { createContext } from "react";

const initailState = {
  themeColor: "dark",
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(initailState);

export const ThemeContextProvider = (props) => {
  const [themeColor, setThemeColor] = useState("dark");
  useEffect(() => {
    const themeColor = localStorage.getItem("themeColor");
    setThemeColor(themeColor);
  }, []);

  const toggleTheme = () => {
    setThemeColor((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    localStorage.setItem(
      "themeColor",
      themeColor === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{ themeColor: themeColor, toggleTheme: toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
