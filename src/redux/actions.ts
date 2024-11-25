import { ADD_TASK, DELETE_TASK, Task, TOGGLE_TASK } from "./taskTypes";

export const addTask = (task: Task) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTask = (id: number) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const deleteTask = (id: number) => ({
  type: DELETE_TASK,
  payload: id,
});
