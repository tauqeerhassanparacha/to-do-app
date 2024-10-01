import { AiTwotoneDelete } from "react-icons/ai";

const Tasks = ({ todos, handleDelete }) => {
  return (
    <div className="wrapper__tasks">
      {todos.map((todo) => (
        <div className="wrapper__tasks-list" key={todo.id}>
          <h3 className="wrapper__task-list-text">{todo.task}</h3>
          <h3 className="wrapper__task-list-text">{todo.dueDate}</h3>
          <div className="wrapper__task-list-delete">
            <AiTwotoneDelete
              onClick={() => handleDelete(todo.id)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
