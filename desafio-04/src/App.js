import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PostList />
    </BrowserRouter>
  );
}

export default App;
