// store.js
import { legacy_createStore as createStore} from 'redux'
import reducer from './reducers';

// Load tasks from local storage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(reducer, persistedState);

// Save tasks to local storage whenever the state changes
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
