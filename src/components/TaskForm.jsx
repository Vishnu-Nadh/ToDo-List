import React from "react";
import styles from "./TaskForm.module.css";

const TaskForm = ({ buttonText, inputValue }) => {
  return (
    <form action="#" method="post" className={styles.taskform}>
      <input
        type="text"
        placeholder={inputValue === "" ? "Enter Your Task" : ""}
        value={inputValue}
      />
      <button
        type="submit"
        className={styles.taskform__btn}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <span>{buttonText}</span>
      </button>
    </form>
  );
};

export default TaskForm;
