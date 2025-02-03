import React from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import DateTime from './components/DateTime';
import FilterTasks from './components/FilterTasks';
import SearchTasks from './components/SearchTasks';
import './App.css'; // Ensure this line is present

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <div className="center-container">
        <SearchTasks />
        <FilterTasks />
      </div>
      <TaskList />
      <DateTime />
    </div>
  );
};

export default App;
