import postReducer from './../../src/reducers/post-reducer';

describe('postReducer', () => {
  let action;
  const samplePostData = {
    title: 'Sample post',
    body: 'interesting stuff',
    author: 'rando jones',
    timeCreated: 15000000000,
    votes: 0,
    id: 0
  };

  test('returns initial state without action', () => {
    expect(postReducer({}, {type: null})).toEqual({});
  });

  test('adds new post to postList', () => {
    const{ title, body, author, timeCreated, votes, id} = samplePostData;
    action = {
      type: 'ADD_POST',
      title: title,
      body: body,
      author: author,
      timeCreated: timeCreated,
      votes: votes,
      id: id
    };
    expect(postReducer({}, action)).toEqual({
      [id] : {
        title: title,
        body: body,
        author: author,
        timeCreated: timeCreated,
        votes: votes,
        id: id
      }
    });
  });

  test('new vote updates post vote count correctly', () => {
    const action = {
      type: 'VOTE',
      postId: samplePostData.id,
      incrementer: 1
    }
    const testState = postReducer({[samplePostData.id] : samplePostData}, action);
    expect(testState[samplePostData.id].votes).toEqual(1);
  });
});
