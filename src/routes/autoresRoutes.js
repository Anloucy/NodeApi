import express from 'express';
import autorController from '../controllers/autorController.js';

const routes = express.Router();

routes.get('/autores', autorController.listarAutores);
routes.get('/autores/:id', autorController.listarAutorPorID);
routes.post('/autores', autorController.cadastrarAutor);
routes.put('/autores/:id', autorController.atualizarAutor);
routes.delete('/autores/:id', autorController.excluirAutorPorID);

export default routes;