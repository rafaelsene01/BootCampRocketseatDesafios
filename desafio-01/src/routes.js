import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import ValidateID from './app/middlewares/ValidateID';

const routes = new Router();

let count = 1;

routes.use((req, res, next) => {
  console.log(`Numero de requisicoes ${count++}`);
  next();
});

routes.post('/projects', ProjectController.store);
routes.get('/projects', ProjectController.index);

routes.post('/projects/:id/tasks', ValidateID, ProjectController.store);
routes.put('/projects/:id', ValidateID, ProjectController.update);
routes.delete('/projects/:id', ValidateID, ProjectController.delete);

export default routes;
