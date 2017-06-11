export default function reducer(state ={
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'NEW_USER_TOGGLE': {
      return {
        ...state,
        fetching: true,
      }
    }
    case 'NEW_USER_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }
  }
  return state;
}