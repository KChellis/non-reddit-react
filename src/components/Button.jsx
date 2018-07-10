import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Button(props){

  function handleNewVote(){
    const { dispatch } = props;
    let action = {
      type: 'VOTE',
      incrementer: props.incrementer,
      postId: props.postId
    };
    dispatch(action);
  }

  function handleNothing(){
    console.log('fired on click');
  }

  return <button onClick={handleNewVote} >{props.voteType}</button>;
}

Button.propTypes = {
  postId: PropTypes.string,
  incrementer: PropTypes.number,
  voteType: PropTypes.string
}

export default connect()(Button);
