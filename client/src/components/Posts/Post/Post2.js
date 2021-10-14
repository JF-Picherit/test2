import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deletePost } from '../../../actions/posts';
import './post2.css';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item cardAnnonce">
          <div class="flex-container">
            <div class="flex-item-left" >
              <div class="mignature">
                <img class="mignature"
                  src={post.selectedFile}
                  alt={post.name}
                />
              </div> 
            </div>
            <div class="flex-item-right">
              <div class="infos-annonce">
                <div class="principal-infos-annonce">
                  <p class="title-annonce">{post.name} - {post.title} </p>
                    <div class="price-annonce">60$</div>
                </div>
                <div class="data-annonce">
                    {/* {(user?.result?.id === post?.creator) && ( */}
                    <p class="local-annonce">
                    <button onClick={() => setCurrentId(post.id)}>
                      update
                    </button>
                    <button onClick={() => dispatch(deletePost(post.id))}>
                      Delete
                    </button>
                    </p>
                    {/* )} */}
                  <p class="local-annonce">{post.tags.map((tag) => `#${tag} `)}</p>
                  <p class="local-annonce">{post.message}</p>
                  <p class="date-annonce">{moment(post.createdAt).fromNow()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item"></div>  
      </div>
    </div>
  );
};

export default Post;
