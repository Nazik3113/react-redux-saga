import React from 'react';
import './App.css';
import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Sync posts</h1>
          <Posts posts={[]} />
        </div>
        <div className="col">
          <h1>Async posts</h1>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
