import express, { Router } from 'express';
import path from 'path';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);
routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.show);

export default routes;
