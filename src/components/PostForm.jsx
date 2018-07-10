import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function PostForm(props) {
  let _title = null;
  let _author = null;
  let _body = null;

  function handleNewPostSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type : 'ADD_POST',
      title: _title.value,
      body: _body.value,
      author: _author.value,
      timeCreated: new Moment().format('LLLL'),
      votes: 0,
      id: v4()
    };
    dispatch(action);
    _title.value = '';
    _author.value = '';
    _body.value = '';
  }

  return (
    <div>
      <h1>Add a Post</h1>
      <form onSubmit={handleNewPostSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Post Title'
          ref={(input) => {_title = input;}}/><br/>
        <input
          type='text'
          id='author'
          placeholder='Your Name'
          ref={(input) => {_author = input;}}/><br/>
        <textarea
          id='body'
          placeholder='Say something!'
          ref={(textarea) => {_body = textarea;}}/><br/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

export default connect()(PostForm);
