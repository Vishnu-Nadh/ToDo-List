import React from "react";
import styles from "./AddTask.module.css";

const AddTask = () => {
  return (
    <form action="#" method="post" className={styles.addtask}>
      <input type="text" placeholder="Enter your task here" />
      <button
        type="submit"
        className={styles.addtask__btn}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <span>Add Task</span>
      </button>
    </form>
  );
};

export default AddTask;
