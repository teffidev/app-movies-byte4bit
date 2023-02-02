const {Authentication} = require("../models/indexModels");
const { encrypt, compare } = require("../utils/handleEncrypt");

const createRegister = async (req, res) => {
    const {name, email, password} = req.body;

    const passwordHash = await encrypt(password);
    const registerUser = await Authentication.create({
        name, 
        email, 
        password: passwordHash
    });
    res.send({data: registerUser});
};

const loginCtrl = async (req, res) => {
    const {email, password} = req.body;
    const user = await Authentication.findOne({email});

    if (!user) {
        res.status(404);
        res.send({error: "User not found"});
    };

    const checkPassword = compare(password, user.password);
    const tokenSession = await tokenSign(user);

    if (checkPassword) {
        res.send({
            data: user,
            token: tokenSession
        });
        return
    };

    if (!checkPassword) {
        res.status(409);
        res.send({error: "Invalid Password"});
    }
    return
}

module.exports = { createRegister, loginCtrl };