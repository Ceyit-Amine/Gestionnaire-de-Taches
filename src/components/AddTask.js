import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const AddTask = () => {
  const [newTask, setNewTask] = useState({ text: '', description: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.text.trim()) {
      dispatch(addTask(newTask));
      setNewTask({ text: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addTodos">
      <input
        type="text"
        placeholder="Name task"
        value={newTask.text}
        onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
        className="todo-input-add"
      />
      <input
        type="text"
        placeholder="Description..."
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default AddTask;
