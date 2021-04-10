import React from 'react';
import './App.css';
import configureStore from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import CatalogRouter from './router/CatalogRouter';

// redux store
const store = configureStore;
store.subscribe(() => console.log(`Redux-state`, store.getState()))

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Router>
          <CatalogRouter></CatalogRouter>
        </Router>
      </ReduxProvider>
    </div>
  );
}

export default App;
