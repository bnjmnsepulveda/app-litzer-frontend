
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

const store = configureStore;
store.subscribe(() => console.log(`Redux-state`, store.getState()))

export default function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

