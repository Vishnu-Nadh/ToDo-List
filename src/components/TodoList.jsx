import React from "react";
import Task from "./Task";
import styles from "./TodoList.module.css";

const dummy = [
  { _id: 1, task: "Learn React basics" },
  { _id: 2, task: "Hit the gym" },
  { _id: 3, task: "Finish project" },
  { _id: 4, task: "Go for a Evening walk" },
];

const TodoList = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__items}>
        {dummy.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
