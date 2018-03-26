import { createStore } from 'redux';

// Import the root reducer
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  /* eslint-disable */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

export default store;
