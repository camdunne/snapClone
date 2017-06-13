// import headers from './config';
import { Actions } from 'react-native-router-flux';
export function createUser(params) {
  console.log('home');
  return Actions.home();
//   fetch('http://localhost:3000/api/user/create', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(params),
//   }).then(response => response.json())
//   .catch(err => console.error(err))
//   .then(() => Actions.home());
}
