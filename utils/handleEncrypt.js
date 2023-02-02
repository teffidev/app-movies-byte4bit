const bcrypt = require("bcryptjs");

const encrypt = async (plainText) => {
    const hash = await bcrypt.hash(plainText, 10);
    return hash;
};

const compare = async (plainPassword, hashPassword) => {
    const hash = await bcrypt.compare(plainPassword, hashPassword);
    return hash;
}

module.exports = {encrypt, compare};