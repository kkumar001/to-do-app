// reducers.js
import { ADD_TASK, DELETE_TASK } from './actions';

// Load tasks from local storage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : { tasks: [] };

const initialState = {
  tasks: persistedState.tasks || []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
