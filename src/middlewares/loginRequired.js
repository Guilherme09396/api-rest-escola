import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = dados.id;
    req.userNome = dados.nome;
    req.userEmail = dados.email;
    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Token inválido ou expirado'],
    });
  }
};
