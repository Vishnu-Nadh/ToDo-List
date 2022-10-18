import React from "react";
import styles from "./EditTask.module.css";
import TaskForm from "./TaskForm";
import { useContext } from "react";
import ModelContext from "../context/model-context";

const EditTask = () => {
  const { closeModel } = useContext(ModelContext);
  const inputValue = "Text";
  const buttonText = "Update Task";
  return (
    <div className={styles.edit}>
      <div className={styles.overlay} onClick={closeModel}></div>
      <div className={styles.edit__form}>
        <button className={styles.edit__close} onClick={closeModel}>
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <TaskForm inputValue={inputValue} buttonText={buttonText} />
      </div>
    </div>
  );
};

export default EditTask;
