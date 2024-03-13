import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ShowComents from './ShowComments';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handlePostSubmit = () => {
    if (newPost.trim() !== '') {
      const currentUser = {
        id: users.length + 1,
        name: 'Denis Bolabaiko'
      };
      setUsers([...users, currentUser]);

      const newPostData = {
        userId: currentUser.id,
        id: posts.length + 1,
        body: newPost
      };
      setPosts([newPostData, ...posts]);
      setNewPost('');
    }
};


  return (
    <div className="news-feed">
      <h2>Write a new post:</h2>
      <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} className="form-control mb-3" />
      <button onClick={handlePostSubmit} className="btn btn-primary mb-3">Submit</button>

      {posts.map(post => {
        const user = users.find(user => user.id === post.userId)
        return (
          <div className="post-card card post-card card mx-auto mt-3">
              <div className="card-body">
                <h3 className="card-title font-weight-bold">{post.title}</h3>
                <b className="card-title text-muted">Author: {user.name}</b>
                <p className="card-text">{post.body}</p>
                <div><Link to ={`/comments/${post.id}`} className="btn btn-primary">Show comments</Link></div>
                <Routes>
                  <Route path={`/comments/${post.id}`} element ={<ShowComents postId ={post.id}/>} />
                </Routes>
              </div>
              </div>
                );
              })}
            </div>
  );
};

export default NewsFeed;
