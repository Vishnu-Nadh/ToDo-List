import React from "react";
import styles from "./AddTask.module.css";
import { useRef, useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");
  const addTaskHandler = (e) => {
    e.preventDefault();
    if (newTask === "") {
      alert("Please provide a non empty task name");
      return;
    }
    onAddTask({
      name: newTask,
      complete: false,
    });
    setNewTask("");
  };

  return (
    <form
      action="#"
      method="post"
      className={styles.taskform}
      onSubmit={addTaskHandler}
    >
      <input
        type="text"
        placeholder="Enter Your Task"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button type="submit" className={styles.taskform__btn}>
        <span>Add Task</span>
      </button>
    </form>
  );
};

export default AddTask;
