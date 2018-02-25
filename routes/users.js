const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  user.getUsers((err, users) => {
    if(err) {
      throw err;
    }
    res.json(users);
  });
});

router.post('/signup', (req, res) => {
  const userJSON = req.body;
  user.User.find({email: userJSON.email}, (err, foundUser) => {
    if(foundUser.length){
      res.status(500).send({error: 'User already Exists!'});
    } else {
      let newUser = new user.User();
      newUser.email = userJSON.email;
      bcrypt.hash(userJSON.password, 10)
      .then( hash => {
        newUser.passwordDigest = hash;
        newUser.sessionToken = req.session.id;
        newUser.save();
        res.send(newUser);
      });
    }
  });
});

router.post('/login',(req, res) => {
  const userJson = req.body;
  user.checkPassword(userJson, (success, foundUser) => {
    if(success) {
      foundUser.sessionToken = req.session.id;
      foundUser.save();
      res.send(foundUser);
    } else {
      res.status(401).send({error: 'Invalid Credentials'});
    }
  });
});

router.post('/logout', (req, res) => {
  const email = req.body.email;
  user.User.find({email: email}, (err, foundUser) => {
    let theUser = foundUser[0];
    theUser.sessionToken = '';
    theUser.save();
    res.send('ok');
  });
});

module.exports = router;
