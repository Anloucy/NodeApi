//Vamos centralizar a logica do que pode ser feito em um livro

import livro from '../models/Livro.js';
import {autor} from '../models/Autor.js';

class LivroController {
    static async listarLivros(req, res) { //static é para n precisar instanciar a classe
        try {
            const listaLivros = await livro.find({});//Chamando todos os livros do banco
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`  });
        }
    }

    static async listarLivroPorID(req, res) { 
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id);//Buscando o livro por id
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`  });
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body //metodo que a biblioteca do moongose usa para criar um novo livro
        try {
            const authorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...authorEncontrado._doc} }; //Pegando os dados de novoLivro e juntando com o autor
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: livroCriado });
        } catch (erro) {
            res.status(500).error({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    static async atualizarLivro(req, res) { 
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body);//Atualizando o livro
            res.status(200).json({ message: 'Livro atualizado com sucesso'});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro`  });
        }
    }

    static async excluirLivroPorID(req, res) { 
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro excluido com sucesso'});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro`  });
        }
    }

    static async listarLivrosPorEditora(req, res) {
        //http://localhost:3000/livros/busca?editora=Classicos assim fica a requisição
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        }
        catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na busca`  });
        }
    }
}

export default LivroController;