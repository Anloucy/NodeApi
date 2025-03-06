import mongoose from "mongoose";
import { AutorSchema } from "./Autor.js";

const LivroSchema = new mongoose.Schema({//Objeto de configuração que define a estrutura e propriedades de um item do banco de dados
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true },//Propriedade obrigatoria, podemos definir o type com o  mongoose.Schema.Types.String
    editora: { type: String},
    preco: { type: Number},
    paginas: { type: Number},
    autor: AutorSchema //Referenciando o schema de autor
}, {versionKey: false}) 

const livro = mongoose.model('livros', LivroSchema);//Criando um modelo de dados com o nome 'livros' e as propriedades LivroSchema
//Modelo é um objeto que representa uma coleção do banco de dados

export default livro;