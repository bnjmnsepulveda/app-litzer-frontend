import React from 'react';
import './App.css';
import AlbumList from './catalog/components/AlbumList/AlbumList';
import Album from './catalog/components/Album/Album';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

// redux store
const store = configureStore;
store.subscribe(() => {
  console.log(`Redux-state`, store.getState())
})

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <AlbumList></AlbumList> */}
        <Album></Album>
      </Provider>

    </div>
  );
}

export default App;
