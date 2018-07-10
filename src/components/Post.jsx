import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Post(props) {
  return(
    <div>
      <h2>{props.post.title} <em>{props.post.votes} likes</em></h2>
      <h3>
        by {props.post.author} on {props.post.timeCreated}
      </h3>
      <hr/>
      <p>{props.post.body}</p>
      <hr/>
      <Button
        postId={props.post.id}
        voteType='Like'
        incrementer={1}/>
      <Button
        postId={props.post.id}
        voteType='Dislike'
        incrementer={-1}/>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post;
