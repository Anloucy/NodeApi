import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/busca', LivroController.listarLivrosPorEditora);//Rotas com maior complexidade vem primeiro
routes.get('/livros/:id', LivroController.listarLivroPorID);//Rota de menor complexidade
routes.post('/livros', LivroController.cadastrarLivro);
routes.put('/livros/:id', LivroController.atualizarLivro);
routes.delete('/livros/:id', LivroController.excluirLivroPorID);


export default routes;