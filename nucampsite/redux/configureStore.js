import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // middleware library
import logger from 'redux-logger'; // middleware library
import { campsites } from './campsites'; // reducer defined in redux folder
import { comments } from './comments'; // reducer defined in redux folder
import { promotions } from './promotions'; // reducer defined in redux folder
import { partners } from './partners'; // reducer defined in redux folder
import { favorites } from './favorites';  // reducer defined in redux folder
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage,
    debug: true
}

// export ConfigureStore, which calls the redux function createStore() and returns it's result.
export const ConfigureStore = () => {
    const store = createStore(
        //combineReducers({ // createStore() has a combineReducers() argument that combines all the reducers into a single root reducer. 
        persistCombineReducers(config, {
            campsites,
            comments,
            partners,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger) // a call to applyMiddleware() allows thunk and logger to work 
    );

    const persistor = persistStore(store);

    return { persistor, store };
};