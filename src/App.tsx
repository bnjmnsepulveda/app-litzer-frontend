import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import CatalogRouter from './shared/router/CatalogRouter';
import ReduxProvider from './shared/providers/ReduxProvider';
import ApolloClientProvider from './shared/providers/ApolloClientProvider';

function App() {
  return (
    <div className="App">
      <ReduxProvider>
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
