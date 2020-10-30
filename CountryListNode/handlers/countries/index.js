const routes = require('express').Router({ mergeParams: true});

module.exports = () => {
    routes.get('/get', require('./countries')());
    return routes;
}