const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Connected')
    } catch (e) {
        console.log(e)
        throw new Error('Error al conectar bd')
    }
}

module.exports = {
    dbConnection
}
