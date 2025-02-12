import express from 'express';

const app = express();
app.use(express.json()); //middleware

const livros = [
    {
        id:1,
        titulo: `O Senhor dos Anéis`,
    },
    {
        id:2,
        titulo: `O Hobbit`,
    }
]

function buscaLivro(id) { //Buscando na lista de livros pelo id
    return livros.findIndex(livro => {
        return livro.id == Number(id);
    })
}

app.get(`/`, (req, res) => {
    res.status(200).send(`Curso de Node.js`);
})

app.get(`/livros`, (req, res) => {
    res.status(200).json(livros);
})

app.get("/livros/:id", (req, res) => { //Usamos :variavel para passar parametros na url
    const index = buscaLivro(req.params.id); //Pegando o paramentro id da url e passando para a função buscaLivro
    res.status(200).json(livros[index]);
})

app.post(`/livros`, (req, res) => {
    livros.push(req.body);
    res.status(201).json("livro cadastrado com sucesso");//201 - para mostrar que foi criado o recurso
})

app.put(`/livros/:id`, (req, res) => {//O put serve para alterar um recurso
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;// Aqui passamos no corpo da requisição o novo titulo
    res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res) => {//Lembrar de passar o / antes do caminho
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1); //splice remove um elemento do array
    res.status(200).send('livro removido com sucesso');
})


export default app;