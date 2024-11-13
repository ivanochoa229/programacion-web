const jwt = require('jsonwebtoken');
const jwtEpiration = parseInt(process.env.JWT_EXPIRATION, '30m');
const secretKey = parseInt(process.env.SECRET_KEY, 'asdasdfsdfdszgdfhfjgfhjhg[][SDasd');
const UserService = require('usersService');

const generateToken = (user) => {

    username = user.username;
    userId = user.id;
    const token = jwt.sign(
        {userId, username},
        secretKey,
        jwtEpiration);

        return token;
};

const validateToken = (token) => {

}