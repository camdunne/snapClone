import headers from './config';
export default {
  createUser: (params) => {
    fetch('http://localhost:3000/api/user/create', {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    }).then(response => response.json());
  },
};
