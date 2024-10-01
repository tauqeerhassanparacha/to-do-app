const Addtask = ({ task, dueDate, setTask, setDueDate, handleAddTask }) => {
  return (
    <div className="wrapper__task-container_input">
      <input
        type="text"
        className="wrapper__text-input"
        placeholder="Add a Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        className="wrapper__text-date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button
        className="wrapper__task-container_input-add-task"
        onClick={handleAddTask}
      >
        Add task
      </button>
    </div>
  );
};

export default Addtask;
