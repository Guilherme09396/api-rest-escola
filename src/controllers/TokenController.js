import dotenv from 'dotenv';

dotenv.config();
import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.json({
          errors: ['Credenciais inválidas'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.json({
          errors: ['Usuário não existe'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.json({
          errors: ['Senha inválida'],
        });
      }

      const token = jwt.sign(
        { id: user.id, nome: user.nome, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRESIN,
        },
      );

      return res.json({ token });
    } catch (err) {
      return res.json({ errors: [err] });
    }
  }
}

export default new TokenController();
