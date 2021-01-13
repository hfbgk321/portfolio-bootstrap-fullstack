import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {Routes} from './Routes/Routes';


const app = express();



//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Routes rerouted
Routes(app);


app.listen(4000,(req,res)=>{
  console.log('Listening on port 4000');
})