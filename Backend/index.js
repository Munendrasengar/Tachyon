import express, { response }  from "express";
import { request } from "http";
import  mongoose  from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import route from "./route/routes.js";

const app = express();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use('/users', route);



const PORT = 8000;
const URL = 'mongodb://user:aniruddh@crudd-shard-00-00.owjll.mongodb.net:27017,crudd-shard-00-01.owjll.mongodb.net:27017,crudd-shard-00-02.owjll.mongodb.net:27017/TASK?ssl=true&replicaSet=atlas-q6zjoi-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
