import axios from 'axios';

export function newUser(searchObj) {
  return function (dispatch) {
    console.log(searchObj);
    return axios.get('/newUser', { params: searchObj })
      .then(dispatch({ type: 'NEW_USER_TOGGLE' }))
      .then(response => dispatch({ type: 'NEW_USER_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'NEW_USER_REJECTED', payload: err }));
  };
}

export function validateUser(searchObj) {
  return 'hi';
}
