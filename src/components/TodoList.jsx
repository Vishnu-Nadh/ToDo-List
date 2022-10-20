import React from "react";
import Task from "./Task";
import styles from "./TodoList.module.css";

const TodoList = ({ tasks, onUpdateComplete, onDeleteTask }) => {
  const toggleCompleteHandler = (task) => {
    onUpdateComplete(task);
  };

  const deleteTaskHandler = (id) => {
    onDeleteTask(id);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo__items}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={toggleCompleteHandler}
            onDeleteTask={deleteTaskHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
