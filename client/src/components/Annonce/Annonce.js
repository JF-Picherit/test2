
import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { getPosts } from '../../actions/posts';
// import Posts from '../Posts/Posts';
// import Form from '../Form/Form';

import './annonce.css';
// import './annonceJquery.js';
 const Annonce = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

  const addCount = () => {
    setCount(count + 1);
  }

//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId, dispatch]);

  return (
    <div>
      <br/><br/><br/><br/><br/>
      <div>
        <button onClick={addCount}>Add</button>
            <h1>Déposer une Annonce</h1>
      </div>
          
    </div>
  );
};

export default Annonce;
