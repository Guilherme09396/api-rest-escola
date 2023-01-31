import express from 'express';
import './src/database/index';

import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/user', userRoutes);
    this.app.use('/token', tokenRoutes);
    this.app.use('/aluno', alunoRoutes);
  }
}

export default new App().app;
