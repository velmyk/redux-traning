import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './counter/counterReducer';
import userReducer from './user/userReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunkMiddleware];

const store = createStore(rootReducer, {}, composeEnhancers(
	applyMiddleware(...middleware)
));

// const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));

export default store;