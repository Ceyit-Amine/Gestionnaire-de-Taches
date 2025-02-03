import React, { useState, useEffect } from 'react';

const EditTask = ({ taskText, taskDescription, onSave, onCancel }) => {
  const [editedText, setEditedText] = useState(taskText);
  const [editedDescription, setEditedDescription] = useState(taskDescription);

  useEffect(() => {
    setEditedText(taskText);
    setEditedDescription(taskDescription);
  }, [taskText, taskDescription]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ text: editedText, description: editedDescription });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-title">Edit Note</h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            autoFocus
            className="edit-textarea"
            placeholder="Enter your note here..."
          />
          <input
            type="text"
            placeholder="Description"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="edit-input"
          />
          <div className="edit-buttons">
            <button type="submit" className="save-btn">
              <i className="fas fa-check">save</i>
            </button>
            <button type="button" className="cancel-btn" onClick={onCancel}>
              <i className="fas fa-times">cancele</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
