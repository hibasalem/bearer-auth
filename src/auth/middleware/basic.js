'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  let basic = req.headers.authorization.split(' ');
  if (basic[0] !== 'Basic') {
    next('Invalid Login2');
    return;
  }
  let [user, pass] = base64.decode(basic[1]).split(':');
  console.log([user, pass]);

  try {
    console.log(req.user);
    req.user = await User.authenticateBasic(user, pass);
    console.log(req.user);

    // const validUser = await User.authenticateBasic(user, pass);
    // req.token = User.generateToken(validUser);
    // console.log(req.token);
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }
};
