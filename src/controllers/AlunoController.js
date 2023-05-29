import Aluno from '../models/Aluno.js';
import Foto from '../models/Foto.js';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename']
        }
      });

      return res.status(200).json(alunos);
    } catch (error) {
      return res.status(500).json({
        errors: ['Erro ao pesquisar alunos']
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido']
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename']
        }
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }
  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.status(200).json(alunoAtualizado);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      await aluno.destroy();

      return res.status(200).json({
        id: aluno.id,
        nome: aluno.nome,
        apagado: true,
        msg: 'Aluno apagado com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        errors: ['Erro ao apagar aluno']
      });
    }
  }
}

export default new AlunoController();