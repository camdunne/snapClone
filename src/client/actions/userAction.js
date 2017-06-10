export function getUser(props) {
  return { type: 'GET_USER_FULFILLED', payload: props };
}