// src/redux/actions/taskActions.js
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH = 'SET_SEARCH';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (id, task) => ({
  type: EDIT_TASK,
  payload: { id, task },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
