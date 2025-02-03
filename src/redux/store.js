// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    return { taskState: parsedState }; // Ensure the structure matches the reducer key
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.taskState); // Save only the taskState part of the state
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const store = configureStore({
  reducer: {
    taskState: taskReducer, // Use 'taskState' as the key for the reducer
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
