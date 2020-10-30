const countriesData = require('./data.json');

module.exports = () => {
    return (req, res, next) => {
        return Promise.resolve(true)
        .then(_ => {
            res.send({ countriesList: countriesData});
        })
        .catch(next);
    }
}
