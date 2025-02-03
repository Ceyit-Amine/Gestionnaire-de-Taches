// src/redux/reducers/taskReducer.js
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER, SET_SEARCH } from '../actions/taskActions';

const initialState = {
  tasks: [],
  theme: 'standard',
  filter: 'all',
  search: '',
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), ...action.payload, completed: false }],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, ...action.payload.task } : task
        ),
      };
   
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
