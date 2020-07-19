import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import userDetails from '../screens/Form/ducks/reducer';

const rootReducer = combineReducers({
  userDetails,
});

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
);

export default store;
