import UserModel from '../models/UserModel';

class UserController {
  async index(req, res) {
    try {
      const users = await UserModel.findAll();
      return res.json(users);
    } catch (err) {
      return res.json(err);
    }
  }

  async store(req, res) {
    try {
      const { nome, email, password } = req.body;
      if (!nome || !email || !password) {
        return res.json({
          errors: ['Informe todos os campos necesários (nome, email, password)'],
        });
      }
      const user = await UserModel.create(req.body);
      return res.json(user);
    } catch (err) {
      if (err.errors) {
        return res.json({
          errors: err.errors.map((error) => error.message),
        });
      }

      return res.json({
        errors: [err],
      });
    }
  }

  async update(req, res) {
    res.send('Olá');
  }

  async delete(req, res) {
    try {

    } catch (err) {

    }
  }
}

export default new UserController();
