import React from "react";
import styles from "./Task.module.css";

const Task = ({ task, onToggleComplete, onDeleteTask }) => {
  const updateCompleteStatus = (e) => {
    e.preventDefault();
    onToggleComplete(task);
  };

  const deleteHandler = () => {
    onDeleteTask(task.id);
  };

  return (
    <div
      className={
        task.complete
          ? `${styles["task-complete"]} ${styles.task}`
          : styles.task
      }
    >
      <div className={styles.task__name}>
        <p>{task.name}</p>
        <form action="" method="post" className={styles["task-complete-form"]}>
          <button
            type="submit"
            onClick={updateCompleteStatus}
            style={
              task.complete
                ? { backgroundColor: "#fa5252" }
                : { backgroundColor: "#51cf66" }
            }
          >
            {task.complete ? "Unmark" : "Mark"} As Completed
          </button>
        </form>
      </div>
      <div className={styles.task__btns}>
        <button
          type="button"
          className={styles.task__btn}
          onClick={deleteHandler}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
