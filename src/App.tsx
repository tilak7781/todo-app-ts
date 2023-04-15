import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodosList from "./TodosList";
import { TodosProvider } from "./TodosProvider";
import AddTodo from "./AddTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodosProvider>
      <h2>Todos</h2>
      <AddTodo />
      <TodosList />
    </TodosProvider>
  );
}

export default App;
