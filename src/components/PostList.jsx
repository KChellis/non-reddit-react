import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from './Post';


function PostList(props){
  return (
    <div>
      <h1>Feed</h1>
      {props.postList.map(function(post) {
        return <Post post= {post}
          key= {post.id} />
      })}
    </div>
  );
}
const mapStateToProps = state => {
  let orderedState = [];
  for (var postId in state ) {
    orderedState.push(state[postId]);
  }

  orderedState.sort((a,b) =>{
    return b.votes - a.votes;
  });
  console.log(orderedState);

  return {
    postList: orderedState
  }
}

PostList.propTypes = {
  postList: PropTypes.object
}

export default connect(mapStateToProps)(PostList);
