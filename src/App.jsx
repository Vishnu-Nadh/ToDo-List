import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { useContext } from "react";
import ThemeContext from "./context/theme-context";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import ModelContext from "./context/model-context";

function App() {
  const { themeColor } = useContext(ThemeContext);
  const { isOpen } = useContext(ModelContext);
  // console.log(isOpen);
  return (
    <div className="App" data-theme={themeColor}>
      <Navbar />
      {isOpen && <EditTask />}
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
