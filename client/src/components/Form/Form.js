import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message.id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <div>
        <h6>
          Please Sign In to create your own memories and like other's memories.
        </h6>
      </div>
    );
  }

  return (
    <div>
      <br/><br/><br/><br/>
      <form onSubmit={handleSubmit}>
        <h6>{currentId ? `Editing "${post.title}"` : 'Creating a Post'}</h6>

        <label>Title:</label><br />
        <input type="text" id="title" placeholder="title" name="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} required/><br /><br />

        <label>Message:</label><br />
        <input type="text" id="message" placeholder="message" name="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} required/><br /><br />

        <label>Tags:</label><br />
        <input type="text" id="tags" placeholder="tags" name="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} required/><br /><br />

        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

        <input type="submit" value="Submit" />
        <button onClick={clear}>Clear</button>

      </form>
    </div>
  );
};

export default Form;
