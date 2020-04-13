// const express = require('express')
// const { json, urlencoded } = require('body-parser')
// const morgan = require('morgan')
// const cors = require('cors')

//! node ^13 
//! package.json: "type": "module"
import express from 'express'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import itemRouter from './resources/item/item.router.js';

const app = express();

//? MIDDLEWARE
app.use(cors());
app.use(bodyparser.json()); //! CONVERTE JSON
app.use(bodyparser.urlencoded({ extended: true })); //! PERMITE O USO DE PARAMETROS EM URLS
app.use(morgan('dev')); //! LOGGER DE REQUESTS

app.use('/api/item', itemRouter)

app.listen(5000, () => {
    
    console.log('Server is open on PORT: 5000')
})
