import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux'; // enable your React Native app use of Redux
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';

/* ------ Week 2: #3. Exercise: Using Redux in React Native ------ */
// Connecting to Redux

// create redux store
const { persistor, store } = ConfigureStore();

// export a functional component App
// wrap the <Main /> component in the <Provider /> component and pass the store to the as a prop.
// <Provider /> allows the main component and all of it's child components to connect to the redux store
// you will still have to go into each component and set it up individually
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<Loading />}
                persistor={persistor}>
                <Main />
            </PersistGate>
        </Provider>
    );
}