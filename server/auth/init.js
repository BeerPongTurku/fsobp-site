import jwt from 'jsonwebtoken';
import passport from 'passport'
import { Strategy } from 'passport-local';
import * as db from '../database';

const config = require('../config.json');

export const loginStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };
  return db.findByEmail(userData.email, (err, user) => {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }
    // if (user.password !== password) { return done(null, false) } 

    return db.comparePassword(userData.email, userData.password, (passwordError, isMatch) => {
      if (passwordError) { return done(passwordError) }
      if (!isMatch) {
        const error = new Error('Incorrect email of password');
        error.name = 'IncorrectCredentialsError';
        done(error);
      }

      const payload = {
        sub: user.id
      }

      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.fname + " " + user.lname
      }

      return done(null, token, data);
    });
  });
});


export const signupStrategy = new Strategy({
  usernameField: 'email',
  password: 'password',
  session: false,
  passReqToCallBack: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };
  //TODO: store new user to the database
  return done(null);
})









// Callback done(error, user)


