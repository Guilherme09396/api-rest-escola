import Aluno from '../models/AlunoModel';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (err) {
      if (err.errors) {
        return res.json({
          errors: err.errors.map((error) => error.message),
        });
      }
      return res.json({ errors: [err] });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(201).json(aluno);
    } catch (err) {
      if (err.errors) {
        return res.json({
          errors: err.errors.map((error) => error.message),
        });
      }
      return res.json({ errors: [err] });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    try {
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.json({
          errors: ['Aluno não existe'],
        });
      }
      const novosDados = await aluno.update(req.body);
      return res.json(novosDados);
    } catch (err) {
      if (err.errors) {
        return res.json({
          errors: err.errors.map((error) => error.message),
        });
      }
      return res.json({ errors: [err] });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.json({
          errors: ['Aluno não existe'],
        });
      }

      await aluno.destroy();
      return res.json({ apagado: true });
    } catch (err) {
      if (err.errors) {
        return res.json({
          errors: err.errors.map((error) => error.message),
        });
      }
      return res.json({ errors: [err] });
    }
  }
}

export default new AlunoController();
