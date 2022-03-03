const express = require('express')
var cors = require('cors');
const { dbConnection } = require('../database/config');
const app = express()

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/users'

        //Connect to database
        this.database();



        //Middlewares
        this.middlewares();
        //Routes of mi app
        this.routes();
    }

    async database() {

        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        // Read and Parse of body
        this.app.use(express.json());
        //Public Directory
        this.app.use( express.static('public'));
    }

    routes() {

       this.app.use(this.usersRoutePath, require('../routes/users'));
    }

    listen() {
        this.app.listen( this.port ,() => {
            console.log('servidor corriendo en puerto 8080')
        })
    }
}

module.exports = Server