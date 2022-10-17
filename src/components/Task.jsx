import React from "react";
import styles from "./Task.module.css";

const Task = ({ task }) => {
  return (
    <div className={styles.task}>
      <div className={styles.task__name}>
        <p>{task.task}</p>
      </div>
      <div className={styles.task__btns}>
        <button type="button" className={styles.task__btn}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button type="button" className={styles.task__btn}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
