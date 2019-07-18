import express from 'express';
import path from 'path';
import cors from 'cors';
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
    this.server.use(cors()); // cors({ origin: 'http://rocktseat.com.br' })
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
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
