import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import ThemeContext from "../context/theme-context";

const Navbar = () => {
  const { themeColor, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.nav}>
      <div className={styles.nav__contents}>
        <h2 className={styles.nav__logo}>ToDo</h2>
        <label
          // type="button"
          className={styles.nav__theme_toggle}
          // onClick={toggleTheme}
          htmlFor="check-box"
        >
          <div>
            <input
              type="checkbox"
              className={styles["check-box"]}
              id="check-box"
              checked={themeColor === "light" ? true : false}
              name="check-box"
              onChange={toggleTheme}
            ></input>
            <div className={`${styles.nav__theme_icon}`}>
              {themeColor === "dark" && <i class="fa-solid fa-moon"></i>}
              {themeColor === "light" && <i class="fa-solid fa-sun"></i>}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
