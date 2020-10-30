const routes = require('express').Router({ mergeParams: true});

module.exports = () => {
    routes.use('/countries', require('./countries')());
    return routes;
}