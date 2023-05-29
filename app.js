import express from 'express';
import dotenv from 'dotenv';
import './src/database/index.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import homeRouter from './src/routes/homeRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import alunoRouter from './src/routes/alunoRoutes.js';
import fotoRouter from './src/routes/fotoRoutes.js';
import tokenRouter from './src/routes/tokenRoutes.js';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    this.app.use(express.urlencoded({
      extended: true
    }));

    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/alunos/', alunoRouter);
    this.app.use('/fotos/', fotoRouter);
    this.app.use('/tokens/', tokenRouter);
  }
}

export default new App().app;