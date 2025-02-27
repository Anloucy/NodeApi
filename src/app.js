import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();
const app = express();
routes(app);

conexao.on('error', (erro) => {
    console.error(`Erro na conexão com o banco de dados: ${erro}`);
})

conexao.once('open', () => {
    console.log('Conexão com o banco de dados realizada com sucesso');
})

export default app;