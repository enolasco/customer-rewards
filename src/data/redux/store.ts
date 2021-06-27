import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { customerReducer } from './reducers/customerReducer';

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: customerReducer,
});

export const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );