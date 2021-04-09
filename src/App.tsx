import React from 'react';
import './App.css';
import AlbumList from './catalog/components/AlbumList/AlbumList';
import Album from './catalog/components/Album/Album';

function App() {
  return (
    <div className="App">
      {/* <AlbumList></AlbumList> */}
      <Album></Album>
    </div>
  );
}

export default App;
