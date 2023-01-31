import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Seu nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Esse email já existe',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Sua idade precisa ser inteiro',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'O seu peso precisa ser um ponto flutuante ou inteiro',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Sua altura precisa ser um ponto flutuante ou inteiro',
            },
          },
        },

      },
      {
        sequelize,
      },
    );
    return this;
  }
}
