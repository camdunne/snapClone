export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_FULFILLED': {
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    }
  }
  return state;
}
