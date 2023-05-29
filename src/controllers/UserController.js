import User from '../models/User.js';

class UserController {
  // Create
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;

      return res.status(201).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email']
      });

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        errors: ['Erro ao mostrar usuários']
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;

      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(500).json({
        errors: ['Erro ao encontrar usuário']
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        });
      }

      const novoUser = await user.update(req.body);

      const { id, nome, email } = novoUser;

      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        });
      }

      await user.destroy();

      return res.status(200).json(null);
    } catch (error) {
      return res.status(500).json({
        errors: ['Erro ao deletar usuário']
      });
    }
  }
}

export default new UserController();