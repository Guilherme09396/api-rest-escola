import Sequelize from 'sequelize';
import configDatabase from '../config/database';
import User from '../models/UserModel';

const models = [User];
const sequelize = new Sequelize(configDatabase);

models.forEach((model) => model.init(sequelize));
