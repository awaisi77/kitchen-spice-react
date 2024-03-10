import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

let appliedMiddleware = applyMiddleware(thunkMiddleware);

// Use redux logger only in development environment.
if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`);
    let loggerMiddleware = createLogger();

    appliedMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware);
}

// save state to local storage
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(e) {
        console.log(e);
    }
}

// load state from local storage
function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const preloadedState = loadFromLocalStorage();

// create store using preloaded state
const store = createStore ( rootReducer, preloadedState, compose (
        appliedMiddleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
            return f;
        }
    )
);

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});
 
export default store;