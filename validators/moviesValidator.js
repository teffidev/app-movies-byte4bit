const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("genre")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {validatorCreateRegister};