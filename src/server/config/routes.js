import express, { Router } from 'express';
import userController from '../controllers/userCtrl';



module.exports = (app) => {
  app.post('/newUser', userController.createUser);
  app.get('/users', userController.getAllUsers);
  app.post('/users/auth', userController.authenticate);
  app.post('/users/auth/refresh', userController.refresh);
  app.post('/users/auth/revoke', userController.revokeAccess);
}