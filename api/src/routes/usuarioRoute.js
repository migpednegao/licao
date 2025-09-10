import express from 'express';
import * as usuario from '../controllers/usuario.js';

const router = express.Router();

router.get('/usuario',usuario.login);
router.get('/usuario/:id',usuario.consultarPorId);
router.get('/usuario/:id',usuario.deletar);
router.get('/usuario/:id',usuario.consultarLogado);
router.get('/usuarios',usuario.consultar);
router.get('/usuario',usuario.cadastrar);
router.get('/usuario/:id',usuario.alterar);

export default router;