import {Router} from  'express';
import * as authControlador from '../controllers/auth.controller';

const router = Router();

router.post('/registro', authControlador.registro );
router.post('/login', authControlador.login );

export default router;