import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Aluno.js';
import User from '../models/User.js';
import Foto from '../models/Foto.js'

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig.development);

models.forEach(model => {
  return model.init(connection);
});
models.forEach(model => {
  return model.associate && model.associate(connection.models);
});