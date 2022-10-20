import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./context/theme-context";
import AddTask from "./components/AddTask";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const { themeColor } = useContext(ThemeContext);
  const [tasks, setTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState({});
  const [newTask, setNewTask] = useState({});
  const [deleteId, setDeleteId] = useState("");
  // Read
  useEffect(() => {
    const getTasks = async () => {
      const tasksSnapShot = await getDocs(collection(db, "tasks"));
      let tasks = [];
      tasksSnapShot.forEach((doc) => {
        const task = { ...doc.data(), id: doc.id };
        tasks.push(task);
      });
      setTasks(tasks);
    };
    return () => getTasks();
  }, [updateTask, newTask, deleteId]);

  // Update
  const toggleComplete = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), { complete: !task.complete });
    setUpdateTask(task);
  };

  // Create
  const addTask = async (task) => {
    await addDoc(collection(db, "tasks"), task);
    setNewTask(task);
  };

  // Delete
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    setDeleteId(id);
  };

  return (
    <div className="App" data-theme={themeColor}>
      <Navbar />
      <AddTask onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onUpdateComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
