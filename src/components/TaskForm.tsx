import React, { useState } from "react";
import { Task } from "../redux/taskTypes";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

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
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
