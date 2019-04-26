const expressJwt = require('express-jwt');
const config = require('../configs/jwt.json');
const userCtrl = require('../controllers/user');

jwt = () => {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: ['/api/v1/users/authenticate', '/api/v1/users/register']
  });
};

isRevoked = async (req, payload, done) => {
  const user = await userCtrl.getById(payload.sub);

  if (!user) {
    return done(null, true);
  }

  done();
};

module.exports = jwt;
