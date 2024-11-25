import React from "react";
import { Task as TaskType } from "../redux/taskTypes";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/actions";
import "./Task.css";

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
