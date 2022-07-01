import React from "react";

const VisibilityControl = ({ setShowCompleted, showCompleted, cleanTasks, isChecked }) => {
  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete it?')){
        cleanTasks()
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(!showCompleted)}
        className="form-check-input"
      />
      <label>Show Tasks Done</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>Clear</button>
    </div>
  );
};

export default VisibilityControl;
