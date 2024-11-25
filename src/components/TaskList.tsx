import React, { useEffect } from "react";
import { fetchTasks } from "../api/tasksAPI";
import { useDispatch, useSelector } from "react-redux";
import { TaskState } from "../redux/taskTypes";
import Task from "./Task";
import { addTask } from "../redux/actions";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: { tasks: TaskState }) => state.tasks.tasks);
  const dispatch = useDispatch();
  console.log("Taskes", tasks);

  useEffect(() => {
    const loadTasks = async () => {
      const initialTasks = await fetchTasks();
      initialTasks.forEach((task) => {
        dispatch(addTask({ ...task, completed: false }));
      });
    };
    loadTasks();
  }, [dispatch]);
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
