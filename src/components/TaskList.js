import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, filter, search } = useSelector(state => state.taskState);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'not-completed') return !task.completed;
    return true;
  }).filter(task => task.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
