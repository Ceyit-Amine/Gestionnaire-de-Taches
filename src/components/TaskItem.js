import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/actions/taskActions';
import EditTask from './EditTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = (newTask) => {
    dispatch(editTask(task.id, newTask));
    setIsEditing(false);
  };

  return (
    <div className={`todo ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <EditTask
          taskText={task.text}
          taskDescription={task.description}
          onSave={handleEdit}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div
            className="task-content"
            onDoubleClick={() => !task.completed && setIsEditing(true)}
          >
            <div className="task-text">{task.text}</div>
            {task.description && (
              <div className="task-description">{task.description}</div>
            )}
            {task.date && (
              <div className="task-date">
                {new Date(task.date).toLocaleDateString()}
              </div>
            )}
          </div>
          <div className="task-actions">
            <button
              className="check-btn"
              onClick={() => dispatch(toggleTask(task.id))}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              className="delete-btn"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            {!task.completed && (
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;