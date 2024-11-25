import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Task Managerment</h1>
          <TaskForm />
          <TaskList />
        </div>
      </Provider>
    </>
  );
};

export default App;
