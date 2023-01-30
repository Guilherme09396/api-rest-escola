import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/', UserController.store);
router.get('/', UserController.index);

export default router;
