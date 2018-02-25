const express = require('express');
const router = express.Router();
const user = require('../models/user');

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
  user.createUser(userJSON, (err, newUser) =>{
    if(err){
      res.status(500).send(
        {error: 'Email already taken or other error occurred'}
      );
    }
    newUser.sessionToken = req.session.id;
    newUser.save();
    res.send(newUser);
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
      res.error(401);
    }
  });
});

module.exports = router;
