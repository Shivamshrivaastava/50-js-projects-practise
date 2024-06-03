import React, { useEffect, useState } from 'react';
import './Overview.css';
import { getPosts } from '../api';

const Overview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="overview"><h1>Loading...</h1></div>;
  }

  return (
    <div className="overview">
      <h1>Overview</h1>
      <div className="post-list">
        {posts.slice(0, 5).map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
