import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import MeetupEventController from './app/controllers/MeetupEventController';
import SubscriptionController from './app/controllers/SubscriptionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/meetup/events', MeetupEventController.index);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files', upload.single('file'), FileController.index);

routes.put('/users', UserController.update);
routes.get('/users', UserController.show);

routes.get('/meetups', MeetupController.index);
routes.post('/meetups', MeetupController.store);
routes.put('/meetups/:id', MeetupController.update);
routes.delete('/meetups/:id', MeetupController.delete);

routes.post('/meetup/:id/subscription', SubscriptionController.store);
routes.get('/meetup/subscriptions', SubscriptionController.index);

export default routes;
