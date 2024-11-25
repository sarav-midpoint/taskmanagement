import React, { useState } from "react";
import { Task } from "../redux/taskTypes";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import "./styles.css";

const TaskForm: React.FunctionComponent = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    debugger;
    console.log("Title => ", title);
    if (title) {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTitle("");
    }
  };

  return (
    <div className="container" id="formsub">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
