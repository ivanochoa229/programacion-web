const jwt = require('jsonwebtoken');
const jwtEpiration = parseInt(process.env.JWT_EXPIRATION, '30m');
const secretKey = parseInt(process.env.SECRET_KEY);
const UserService = require('usersService');

const createToken = (username, password) => {

    user = UserService.findByUsername(username);

   

    username = user.username;
    userId = user.id;
    const token = jwt.sign(
        {userId, username},
        secretKey,
        jwtEpiration);

        return token;
};