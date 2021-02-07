import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';

export default function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <div class="loader"></div>;
  }

  if (!posts.length) {
    return (
      <button className="get-posts" onClick={() => dispatch(fetchPosts())}>
        Get posts
      </button>
    );
  }
  return posts.map((post) => <Post title={post.title} key={post.id} />);
}
