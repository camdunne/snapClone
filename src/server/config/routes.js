import userController from '../controllers/user';
import { authLocalLogin } from '../controllers/passport';

module.exports = (app, passport) => {
  app.post('/login', authLocalLogin.bind(null, passport));
  app.post('/api/user/create', userController.createUser);
  app.get('/api/user/all', userController.getAllUsers);
  app.post('/api/user/auth', userController.authenticate);
  app.post('/api/user/refresh', userController.refresh);
  app.post('/api/user/revoke', userController.revokeAccess);
};
