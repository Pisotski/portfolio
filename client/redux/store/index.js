// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
// eslint-disable-next-line import/prefer-default-export

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

export default createStore(
  reducers,
  {},
  enhancer,
);
