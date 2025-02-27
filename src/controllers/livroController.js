//Vamos centralizar a logica do que pode ser feito em um livro

import livro from '../models/Livro.js';

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
        try {
            const novoLivro = await livro.create(req.body); //metodo que a biblioteca do moongose usa para criar um novo livro
            res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: novoLivro });
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
}

export default LivroController;