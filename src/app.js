// import {openDb} from './configDB.js';
import { createTable, insertPessoa, updatePessoa, selectPessoa, selectPessoas,deletePessoa} from './Controler/Pessoa.js';

import express from 'express';
import fs from "fs";
import https from "https"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());
import router  from './routes.js';
app.use(router)

app.get('/', function(req, res){
    res.send("Api Rodando");
});

app.listen(3000, ()=>console.log("Api Rodando."))

https.createServer({
    cert: fs.readFileSync("./src/SSL/code.crt"),
    key: fs.readFileSync("./src/SSL/code.key")
}, app).listen(3001, () => console.log("Rodando em HTTTPS"));