const express   = require('express');
const app       = express();
const sequelize = require('./database/db');

import morgan from 'morgan';
import cors from "cors";
import contactoRouter from './routes/contacto.router';
import authRouter from './routes/auth.router';

const Usuario  = require('./database/models/Usuario');
const PORT   = process.env.PORT || 4000;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/contactos', contactoRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('contacto api');
});

app.listen(PORT, ()=>  {

   console.log(`http://localhost:${PORT}`);

   sequelize.sync({force:false})
            .then( ()=> {
                    console.log("conectado");
                  }
                ).catch(error => {
                    console.log("error",error);
                  }
                );
})