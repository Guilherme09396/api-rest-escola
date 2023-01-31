import User from '../models/UserModel';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (err) {
      return res.json(err);
    }
  }

  async store(req, res) {
    try {
      if (!req.body.nome || !req.body.email || !req.body.password) {
        return res.json({
          errors: ['Informe todos os campos necesários (nome, email, password)'],
        });
      }
      const { id, nome, email } = await User.create(req.body);
      return res.json({ id, nome, email });
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
    const { userId } = req;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.json({
          errors: ['Usuário não existe'],
        });
      }

      const { id, nome, email } = await user.update(req.body);
      return res.json({ id, nome, email });
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

  async delete(req, res) {
    const id = req.userId;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json({ apagado: true });
    } catch (err) {
      return res.json({ errors: [err] });
    }
  }
}

export default new UserController();
