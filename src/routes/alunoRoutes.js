import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const router = Router();

router.get('/', AlunoController.index);
router.post('/', AlunoController.store);
router.put('/:id', AlunoController.update);
router.delete('/:id', AlunoController.delete);

export default router;

// rota post, update, delete finalizada
