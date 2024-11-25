import axios from "axios";
import { Task } from "../redux/taskTypes";

const API_URL = "https://jsonplacehoilder.typicode.com/todos";

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10);
};

export const createTask = async (task: Task) => {
  return axios.post(API_URL, task);
};

export const removeTask = async (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};
