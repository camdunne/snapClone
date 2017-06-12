import userController from '../controllers/user';
import authController from '../controllers/auth';
module.exports = (app) => {
  app.post('/api/user/login', authController.
  )
  app.post('/api/user/create', userController.createUser);
  app.get('/api/user/all', userController.getAllUsers);
  app.post('/api/user/auth', userController.authenticate);
  app.post('/api/user/refresh', userController.refresh);
  app.post('/api/user/revoke', userController.revokeAccess);
};
