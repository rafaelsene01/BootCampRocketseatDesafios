import express from 'express';
import Youch from 'youch';
import * as Sentry from '@sentry/node';
import 'express-async-errors';

import routes from './routes';
import sentryConfig from './config/sentry';

import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlawares();
    this.routes();
    this.exectionHandler();
  }

  middlawares() {
    this.server.use(Sentry.Handlers.errorHandler());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exectionHandler() {
    this.server.use(async (err, req, res, next) => {
      const error = await new Youch(err, req).toJSON();
      return res.status(500).json(error);
    });
  }
}

export default new App().server;
