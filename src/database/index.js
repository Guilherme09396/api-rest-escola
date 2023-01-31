import Sequelize from 'sequelize';
import configDatabase from '../config/database';
import User from '../models/UserModel';
import Aluno from '../models/AlunoModel';

const models = [User, Aluno];
const sequelize = new Sequelize(configDatabase);

models.forEach((model) => model.init(sequelize));
