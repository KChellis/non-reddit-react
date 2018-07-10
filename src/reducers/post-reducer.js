

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case 'ADD_POST':
    const { title, body, author, timeCreated, votes, id} = action;
    newState = Object.assign({}, state, {
      [id]: {
        title: title,
        body: body,
        author: author,
        timeCreated: timeCreated,
        votes: votes,
        id: id
      }
    });
    return newState;
  case 'VOTE' :
    const { postId, incrementer } = action;
    newState = Object.assign({}, state);
    newState[postId].votes += incrementer;
    return newState;
  default:
    return state;
  }

};
