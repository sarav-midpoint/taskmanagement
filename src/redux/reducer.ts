import { ADD_TASK, DELETE_TASK, TaskState, TOGGLE_TASK } from "./taskTypes";

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TOGGLE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
