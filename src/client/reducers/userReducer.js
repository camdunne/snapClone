import axios from 'axios';

export default function newUser(searchObj) {
  return function (dispatch) {
    return axios.get('/user', { params: searchObj })
      .then(dispatch({ type: 'NEW_USER_TOGGLE' }))
      .then(response => dispatch({ type: 'NEW_USER_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'CREATE_USER_REJECTED', payload: err }));
  };
}
