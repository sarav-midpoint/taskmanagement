export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
