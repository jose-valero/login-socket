import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createPromise } from 'redux-promise-middleware';

const middlewares = [
  thunk,
  reduxImmutableStateInvariant({
    ignore: ['auth.currentUser'],
  }),
  createPromise({
    promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
  }),
];

export default middlewares;
