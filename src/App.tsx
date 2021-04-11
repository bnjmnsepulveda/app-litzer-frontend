import React from 'react';
import './App.css';
import configureStore from './shared/redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import CatalogRouter from './shared/router/CatalogRouter';
import ApolloClientProvider from './shared/providers/ApolloClientProvider';

// redux store
const store = configureStore;
store.subscribe(() => console.log(`Redux-state`, store.getState()))

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <ApolloClientProvider>
          <Router>
            <CatalogRouter></CatalogRouter>
          </Router>
        </ApolloClientProvider>
      </ReduxProvider>
    </div>
  );
}

export default App;
