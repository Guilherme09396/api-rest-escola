import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/', loginRequired, UserController.store);
router.get('/', UserController.index);

export default router;
