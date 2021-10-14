import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post2';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? 'en cours(svg qui tourne)' : (
      
      <div>
        {posts.map((post) => (
          <div id={post.id} >
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    )
  );
};

export default Posts;
