require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config')

const app = express();
app.use(cors());

dbConnection().then(() => {
    // Rutas
    app.get('/', (request, resp) => {
        resp
            .status(200)
            .json(
                {
                    ok: true,
                    msg: 'Hola mundo'
                });
    });

    app.listen(process.env.PORT, () => {
        console.log('servidor en ', process.env.PORT)
    });

});
