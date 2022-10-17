import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import ThemeContext from "../context/theme-context";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.nav}>
      <div className={styles.nav__contents}>
        <h2 className={styles.nav__logo}>ToDo</h2>
        <button
          type="button"
          className={styles.nav__theme_toggle}
          onClick={toggleTheme}
        >
          themeButton
        </button>
      </div>
    </div>
  );
};

export default Navbar;
