import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      
      <div>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>

      <div>
        <Posts setCurrentId={setCurrentId} />
      </div>
          
    </div>
  );
};

export default Home;
