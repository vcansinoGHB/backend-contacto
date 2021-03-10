import {Router} from  'express';
import * as contactoControlador from '../controllers/contacto.controller';
import { validaToken } from '../middleware/authjwt';

const router = Router();

router.post('/',validaToken, contactoControlador.crearContacto );

router.post('/busca',validaToken, contactoControlador.buscaContactos);

router.get('/',validaToken, contactoControlador.obtieneContactos );

router.get('/:id',validaToken, contactoControlador.obtieneContactoPorId );

router.put('/:id',validaToken, contactoControlador.actualizarContacto );

router.delete('/:id',validaToken, contactoControlador.eliminarContacto );

export default router;