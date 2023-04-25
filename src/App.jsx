import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from 'uuid';
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true,
    },
  ]);

  useEffect(() => {
      const fetchTasks = async () => {
        const {data} = await axios.get(
          'https://jsonplaceholder.cypress.io/todos?_limit-10');
        setTasks(data);
      }; 
      fetchTasks();    
  }, []);

  const handleAddTaskClick = (taskId) => {
      const newTasks = tasks.map(task => {
        if(task.id === taskId) return {...task, completed: !task.completed}

        return task;
      });
      setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
    }];
    setTasks(newTask);
  }

  const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId);

      setTasks(newTasks);
  };
  return(
    <Router>
        <div className="container">
          <Header/>
          <Route path="/"
          exact
          render={() => (
            <>
                <AddTask handleTaskAddition = {handleTaskAddition}/>
                <Tasks
                    tasks ={tasks} 
                    handleTaskClik={handleAddTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                />
            </>
          )}
        />
        <Route path="/:taskTitle" exact Component={TaskDetails}/>
        </div>
    </Router>
  );
};

export default App;
