import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import middlewares from '../middlewares';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
