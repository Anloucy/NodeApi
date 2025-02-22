import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    //Se atentar a qual database vc ta chamando pois se depois de .net/ n tiver nada o mongo vai criar um test

    return mongoose.connection;
}

export default conectaNaDatabase;