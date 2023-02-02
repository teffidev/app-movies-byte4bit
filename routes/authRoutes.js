const express = require("express");
const router = express.Router();
const {createRegister, loginCtrl} = require("./../controllers/authControllers");
// const {validatorCreateRegister} = require("./../validators/authValidator");

//Login!
router.post("/login", loginCtrl);
//Registrar un usuario
router.post("/register", createRegister);

module.exports = router;