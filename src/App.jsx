import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { useContext } from "react";
import ThemeContext from "./context/theme-context";
import AddTask from "./components/AddTask";

function App() {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="App" data-theme={themeColor}>
      <Navbar />
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
