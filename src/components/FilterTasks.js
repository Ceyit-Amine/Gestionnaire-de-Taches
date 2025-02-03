import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/taskActions';

const FilterTasks = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div className="filter-buttons">
      <button
        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
        onClick={() => dispatch(setFilter('all'))}
      >
        All
      </button>
      <button
        className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => dispatch(setFilter('completed'))}
      >
        Completed
      </button>
      <button
        className={`filter-button ${filter === 'not-completed' ? 'active' : ''}`}
        onClick={() => dispatch(setFilter('not-completed'))}
      >
        Not Completed
      </button>
    </div>
  );
};

export default FilterTasks;
