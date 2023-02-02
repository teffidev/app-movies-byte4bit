const {validationResult} = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (e) {
        res.status(404);
        res.send({errores: e.array()})
    };
};

module.exports = validateResults;