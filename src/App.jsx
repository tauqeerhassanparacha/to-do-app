import "./App.css";
import Addtask from "./components/Addtask.jsx";
import Tasks from "./components/Tasks.jsx";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    setTodos([...todos, { id: Date.now(), task: task, dueDate: dueDate }]);
    setTask("");
    setDueDate("");
  };

  const handleDelete = (id) => {
    const updatetodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatetodos);
  };

  return (
    <div className="wrapper">
      <div className="wrapper__heading">TO DO APP</div>
      <div className="wrapper__task -container">
        <Addtask
          task={task}
          dueDate={dueDate}
          setTask={setTask}
          setDueDate={setDueDate}
          handleAddTask={handleAddTask}
        />
        <hr className="horizontal-rule" />
        <Tasks todos={todos} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
