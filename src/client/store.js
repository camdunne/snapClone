import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const enhancer = compose(
        applyMiddleware(thunk, ReduxLogger),
    );
  return createStore(rootReducer, initialState, enhancer);
}
