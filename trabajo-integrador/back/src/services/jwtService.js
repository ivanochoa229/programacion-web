const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtEpiration = process.env.JWT_EXPIRATION;
const secretKey = process.env.SECRET_KEY;

const generateToken = (user) => {

    username = user.username;
    userId = user.id;
    const token = jwt.sign(
        {userId, username},
        secretKey,
        {expiresIn: jwtEpiration});
        return token;
};

const validateToken = (token) => {

    return jwt.verify(token,secretKey);
};

    module.exports = {
        generateToken,
        validateToken
    };