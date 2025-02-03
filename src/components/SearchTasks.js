import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/actions/taskActions';

const SearchTasks = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearch}
      className="search-input"
    />
  );
};

export default SearchTasks;
