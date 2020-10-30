const express = require('express');
const figlet = require('figlet');
const app = express();
let routers = express.Router();
let routes = require('./handlers');
const port = 8080;


app.use('/', routes());
// errorHandler middleware should be added in last
app.use(errorHandler);

/**
 * Errorhandler middleware it should be added after all the middlewares
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function errorHandler(err, req, res, next) {
    console.error("Error: ", err.stack);
    res.status(500).send({error: 'Something failed!'});
}

app.listen(port, (req, res) => {
    return Promise.resolve(true)
    .then(_ => {
        console.log(figlet.textSync('Country List App!', {
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }));
        console.log(`server started at port: ${port}`);
    })
    .catch(err => {
        console.log(`error while initializing: `, err);
    });
});