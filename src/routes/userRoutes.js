import { Router } from 'express';
import userController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

// Rotas não muito comuns
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  index -> lista todos os usuários -> GET
  create/store -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PUT ou PATCH
*/